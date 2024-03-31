import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../Images/nullImage.png";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import { endpointPath } from "../../config/api";
import { Container, Header, card } from "./index";
import { useParams } from "react-router-dom";

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
      const response = await axios.get(endpointPath(category));
      setLoading(true);
      const parsedData = response.data;
      setArticles(parsedData.results);
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
                      description={element.abstract}
                      published={element.publishedAt}
                      author={element.byline === "" ? "unknown" : element.byline}
                      alt="News image"
                      publishedAt={element.publishedAt}
                      imageUrl={
                        element.multimedia.length === 0
                          ? NullImage
                          : element.multimedia[0].url
                      }
                      urlNews={element.url}
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
