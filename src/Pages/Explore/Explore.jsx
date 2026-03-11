import React from 'react'
import './Explore.css'
import { fetchCategories } from '../../../util/http'
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'

const Explore = () => {
    const { data, isPending } = useQuery({
        queryKey: ['category'],
        queryFn: fetchCategories
    })
    return (
        <div className='category'>
            <div className='cont big-group'>
                {isPending ? <p>Loading</p> :
                    data.main.map(
                        cat => (
                            <NavLink key={cat.category} to={cat.param}>
                                <div className='item'>
                                    <img src={cat.imageUrl} />
                                    <p>{cat.category}</p>
                                </div>
                            </NavLink>
                        )
                    )
                }

            </div>
            <div className='cont small-group'>
                {isPending ? <p>Loading</p> : data.sub.map(
                    cat => (
                        <NavLink key={cat.category} to={cat.param}>
                            <div className='item'>{cat.category} </div>
                        </NavLink>
                    )
                )}
            </div>
        </div>
    )
}

export default Explore