import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import { twitterSearchApi } from "../../config";
export const per_page = 10;
const maxResults = 10;
const twitterSearchApi = "https://api.twitter.com/1.1/search/tweets.json"; //`https://www.googleapis.com/twitter/v3/search?maxResults=${maxResults}&type=video&key=${twitterSearchApi}&part=snippet`;

const onSearchReqeust = async (searchText, pageToken) =>
  await fetch(
    `${twitterSearchApi}&q=${encodeURIComponent(searchText)}${pageToken}`
  )
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);

function* searchRequest({ payload }) {
  const { searchText, pageToken } = payload;
  try {
    const searchResult = yield call(
      onSearchReqeust,
      searchText,
      pageToken ? `&pageToken=${pageToken}` : ""
    );
    if (searchResult.items) {
      yield put(
        actions.twitterSearchSuccess(
          searchResult.items,
          searchResult.pageInfo.totalResults,
          searchResult.nextPageToken,
          searchResult.prevPageToken
        )
      );
    } else {
      yield put(actions.twitterSearchSuccess());
    }
  } catch (error) {
    yield put(actions.twitterSearchSuccess());
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.TWITTER_SEARCH, searchRequest)]);
}
