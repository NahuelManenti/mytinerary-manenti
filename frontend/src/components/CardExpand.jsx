import React from 'react'
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tineraryActions from '../redux/actions/tineraryActions';


export default function CardExpand(props) {

    const dispatch = useDispatch();
    useEffect( () => {
      dispatch(tineraryActions.findFromCity(idCardsCountris))
    },[])
    const tinerarySearch = useSelector(store => store.tineraryReducer.findFromCity)

    const {idCardsCountris} = useParams()

console.log(tinerarySearch)
    return (
    <>
    <div>
         <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-between'}}>
            {tinerarySearch?.map( everyAct =>
                <div key={everyAct._id}>
                    <Box className='absolute activities' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(126, 196, 165, 0.4)',
                        marginLeft: '16px',
                        marginRight: '16px'}}>
                        <Typography variant="h4" className='fredokaFont shadows' sx={{color: 'black'}}>{everyAct.name}</Typography>
                    </Box>
                    <Box className='relative activities' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '16px',
                        marginRight: '16px'}}>
                        <img src={process.env.PUBLIC_URL+`${everyAct.img}`} alt={everyAct.name} className='fitImg' />
                    </Box>
                </div>
            )}
        </Box>
    </div>
    </>
  )
}

