import http from '../http-common'

const create = data => {
  return http.post('/book', data);
};
const getBooks = () => {
  return http.get('/booklists');

};
const getBooksId = (id) => {
  return http.get(`/getBook/${id}`);

};
const updateBook = (id,data) => {
  return http.put(`/updateBook/${id}`,data);

};
const deleteBooks = (id) => {
  return http.delete(`/booksdelete/${id}`);

};
export default {
  create,
  getBooks,
  deleteBooks,
  getBooksId,
  updateBook
};