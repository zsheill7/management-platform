const actions = {
  TWITTER_SEARCH: "TWITTER_SEARCH",
  TWITTER_SUCCESS_RESULT: "TWITTER_SUCCESS_RESULT",
  TWITTER_ERROR_RESULT: "TWITTER_ERROR_RESULT",
  twitterSearch: searchText => ({
    type: actions.TWITTER_SEARCH,
    payload: { searchText }
  }),
  onPageChange: (searchText, pageToken) => ({
    type: actions.TWITTER_SEARCH,
    payload: { searchText, pageToken }
  }),
  twitterSearchSuccess: (
    result,
    total_count,
    nextPageToken,
    prevPageToken
  ) => ({
    type: actions.TWITTER_SUCCESS_RESULT,
    result,
    total_count,
    nextPageToken,
    prevPageToken
  }),
  twitterSearchError: () => ({
    type: actions.TWITTER_ERROR_RESULT
  })
};
export default actions;
