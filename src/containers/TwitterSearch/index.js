import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import PageHeader from "../../components/utility/pageHeader";
import Box from "../../components/utility/box";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import { InputSearch } from "../../components/uielements/input";
import IntlMessages from "../../components/utility/intlMessages";
import notification from "../../components/notification";
import TwitterResult from "../../components/twitterSearch/result";
import basicStyle from "../../config/basicStyle";
import actions from "../../redux/twitterSearch/actions";

const { twitterSearch, onPageChange } = actions;

class TwitterSearch extends Component {
  onSearch = value => {
    if (value && value.length > 0) {
      this.props.twitterSearch(value);
    } else {
      notification("error", "Please type something");
    }
  };
  componentDidMount() {
    this.onSearch(this.props.TwitterSearch.searchText);
  }
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="sidebar.twitterSearch" />
        </PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box>
              <InputSearch
                placeholder="Search on Twitter"
                defaultValue={this.props.TwitterSearch.searchText}
                onSearch={this.onSearch}
              />
              <TwitterResult
                TwitterSearch={this.props.TwitterSearch}
                onPageChange={this.props.onPageChange}
              />
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
function mapStateToProps(state) {
  return { TwitterSearch: state.TwitterSearch.toJS() };
}
export default connect(mapStateToProps, { twitterSearch, onPageChange })(
  TwitterSearch
);
