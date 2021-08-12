/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import api from '../../api/api';
import Modal from '../Modal/Modal';
import {
  Card,
  BookImg,
  BookInfo,
  BookTitle,
  BookAuthor,
  BookDetails,
  BoxInfo,
} from './styles';

function Cards(props) {
  const [modalVisible, setModal] = useState(false);
  const [bookData, setData] = useState({ data: [] });

  const getBook = async (bookID) => {
    setModal(true);
    try {
      const token = localStorage.getItem('token');
      const { data } = await api.get(`books/${bookID}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      setData(data);
      // eslint-disable-next-line no-empty
    } catch (error) { }
  };

  return (
    <>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          onClose={() => setModal(false)}
          data={bookData}
        />
      )}

      <Card key={props.bookID} onClick={() => getBook(props.bookID)}>
        <BookImg src={props.imageUrl} alt={props.id} />

        <BoxInfo>
          <BookInfo>
            <BookTitle>{props.title}</BookTitle>
            <BookAuthor>{props.authors}</BookAuthor>
          </BookInfo>
          <BookDetails>
            <span>
              {props.pageCount}
              {' '}
              páginas
            </span>
            <span>{props.publisher}</span>
            <span>
              Publicado em
              {' '}
              {props.published}
            </span>
          </BookDetails>
        </BoxInfo>
      </Card>
    </>
  );
}

export default Cards;