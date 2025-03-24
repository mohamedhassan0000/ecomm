import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../redux/productsSlice';

const Categories = () => {

    // selecror 
    const allCategories = useSelector(state => state.products.allCats)
    // dispatch
    const dispatch = useDispatch()
    return (
        <div className='d-flex justify-content-center gap-2'>
            {allCategories.length > 0 ? (
                allCategories.map((category, index) => (
                    // <div >
                    <Button onClick={() => dispatch(filterByCategory(category))} key={index}>{category}</Button>
                    // </div>
                ))
            ) : (
                "There Aren't Any Categories"
            )}
        </div>
    );
};

export default Categories