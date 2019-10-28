import PropTypes from 'prop-types';

export const reducersHandler = (type, data) => ({ type, payload: data });

export const UserTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  }),
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string,
    bs: PropTypes.string,
  }),
};

export const PostTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};

export const CommentTypes = {
  postId: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  body: PropTypes.string,
  email: PropTypes.string,
};
