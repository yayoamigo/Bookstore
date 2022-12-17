import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkAction} from '../redux/categories/categories';
import '../styles/Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <section className="categories">
      <button type="button" className="btn-status" onClick={() => dispatch(checkAction())}>Check Status</button>
      <h1>{categories}</h1>
    </section>
  );
};

export default Categories;