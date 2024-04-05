import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../Images/nullImage.png";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import { endpointSearch } from "../../config/api";
import { Container, Header, card } from "./index";

function News({ newscategory }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const category = newscategory;
  const title = capitaLize(category);
  document.title = `${capitaLize(title)} - News`;

  const updatenews = async () => {
    try {
      const response = await axios.get(endpointSearch(category));
      setLoading(true);
      const parsedData = response.data.response.docs;
      console.log(parsedData);
      setArticles(parsedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>{header(capitaLize(category))}</Header>
          <Container>
            <Row>
              {articles.map((element) => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}>
                    <NewsItem
                      title={element.title}
                      description={element?.snippet || element.abstract}
                      published={element.pub_date}
                      author={element.byline.original}
                      alt="News image"
                      publishedAt={element.pub_date}
                      imageUrl={
                        element.multimedia.length === 0
                          ? NullImage
                          : `https://static01.nyt.com/${element.multimedia[0].url}`
                      }
                      urlNews={element.web_url}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

News.defaultProps = {
  newscategory: "general",
};

News.propTypes = {
  newscategory: PropTypes.string,
};

export default News;
