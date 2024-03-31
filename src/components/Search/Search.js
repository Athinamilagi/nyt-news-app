import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import NullImage from "../../components/Images/nullImage.png";
import { useDispatch, useSelector } from "react-redux";
import { searchArticle } from "../../store/action";
import { useLocation, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { header, noFound, searching } from "../../config/config";
import { Container, Header, card } from "./index";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalArticles, setTotalArticle] = useState(0);
  const { articles, loading } = useSelector((state) => state.search);
  const { query } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchArticle(query.toLowerCase()));
  }, [query, dispatch]);

  useEffect(() => {
    setSearchQuery(query);
    setTotalArticle(articles ? articles.length : 0);
  }, [query, articles]);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (location.pathname === "/") {
    document.title = "Daily Chronicle";
  } else {
    document.title =
      totalArticles === 0
        ? noFound
        : loading
        ? searching
        : `${capitaLize(searchQuery)} - News`;
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>
            {totalArticles === 0 ? noFound : header(capitaLize(searchQuery))}
          </Header>
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

export default Search;
