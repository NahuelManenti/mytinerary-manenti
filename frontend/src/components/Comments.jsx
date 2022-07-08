//importo de librerias externas
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Link as LinkRouter } from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
 //import { useSelector } from 'react-redux'
import '../style/Comments.css'
//importo acciones de redux
import { connect } from 'react-redux'
import tineraryActions from '../redux/actions/tineraryActions'


function Comments(props) {

    // const UserRegister = useSelector(store => store.userReducer.user)
    //const tinerarySearch = useSelector(store => store.tineraryReducer.filterTin)

    const [comments, setComments] = useState([]) //para guardar los comentarios de la BD
    const [inputText, setInputText] = useState("") //para guardar los comentarios nuevos
    const [modifyCom, setModifyCom] = useState("") //para guardar los comentarios modificados
    const [reload, setReload] = useState(false) //para "recargar" la pagina


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(tineraryActions.oneTinerary(props.allProps.idTineraryes))
            .then(response => setComments(response.comments))
        // eslint-disable-next-line
    }, [reload])


    async function toAdd(event) {
        if (inputText !== ""){
        let commentData = {
            itineraryIds: props.allProps.idTineraryes,
            comments: {
                        comment: inputText,
                        userId: props.user.id
                    }
        }
        await props.addComment(commentData)
        setInputText("")
        setReload(!reload)
    }
    else{ dispatch({
                    type: 'message',
                    payload: { view: true, message: "Please write something", success: false}
                })
        }
   }
 

    async function toModify(event) {
        const commentData = {
            commentId: event.target.id,
            comments: {
                comment: modifyCom,
                userId: props.user.id
            }
        }
        await props.modifyComment(commentData)

        setReload(!reload)
    }



    async function toDelete(event) {
        await props.deleteComment(event.target.id)
        setReload(!reload)
    }

    return ( // sx={{ margin: '16px', padding: '8px', display: 'flex',flexDirection: 'column',justifyContent: 'center', backgroundColor: 'rgb(115, 73, 48)' }}
        <Box className='boxInputTextComment'  sx={{ margin: '16px', padding: '8px', display: 'flex',flexDirection: 'column',justifyContent: 'center', backgroundColor: 'rgb(000, 000, 000)' }}>      
            {comments?.map((comment) =>
            (props.user ?
                (props.user.id !== comment.userId._id ?
                    <Box className='boxInputTextComment' key={comment._id} sx={{ margin: '16px', padding: '8px', display: 'flex', color: 'white', backgroundColor: 'rgb(115, 73, 48)' }}>
                        <Avatar className='tineraryManagerPhoto mediaQueriesComments'
                            alt={comment.userId.name}
                            src={`${comment.userId.userPhoto}`}
                            sx={{ width: 150, height: 150 }}
                        />
                        <Box sx={{ paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <Typography variant='subtitle1' sx={{ width: '100%', padding: '8px', paddingTop: '0' }} className='fredokaFont smallT'>{comment.userId.name} {comment.userId.lastName}</Typography>
                            <Typography variant="subtitle2" sx={{ width: '100%', display: 'flex', padding: '8px', color: 'black', backgroundColor: 'rgb(121, 131, 135)' }} className='inputTextCommentNotLoggin'>{comment.comment}</Typography>
                        </Box>
                    </Box>
                    :
                    <Box className='boxInputTextComment' key={comment._id} sx={{ margin: '16px', padding: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white', backgroundColor: 'rgb(11, 27, 66)' }}>
                        <Avatar className='tineraryManagerPhoto mediaQueriesComments'
                            alt={comment.userId.name}
                            src={`${comment.userId.userPhoto}`}
                            sx={{ width: 150, height: 150 }}
                        />
                        <Box sx={{ paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant='h6' sx={{ width: '100%', color: 'white' }}>{comment.userId.email}</Typography>
                            <Box sx={{ width: '100%', display: 'flex', paddingTop: '8px', paddingLeft: '0', flexDirection: 'column' }}>
                                <textarea rows='2' onChange={(event) => setModifyCom(event.target.value)} defaultValue={comment.comment} className='inputTextComment' />
                                <Stack  sx={{ paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Button id={comment._id} onClick={toModify} sx={{ bgcolor: 'rgb(1, 80, 119)', '&:hover': { bgcolor: 'rgba(1, 80, 119, 0.7)' }, padding: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px', margin: '5px' }}variant="outlined" color="success">Modify</Button>
                                    <Button id={comment._id} onClick={toDelete} sx={{ bgcolor: 'rgb(1, 80, 119)', '&:hover': { bgcolor: 'rgba(1, 80, 119, 0.7)' }, padding: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px', margin: '5px' }}variant="outlined" color="error">Delete</Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                ) :
                (
                    <Box className='boxInputTextComment' key={comment._id} sx={{ margin: '16px', padding: '8px', display: 'flex', color: 'white', backgroundColor: 'rgb(48, 53, 102)' }}>
                        <Avatar className='tineraryManagerPhoto mediaQueriesComments'
                            alt={comment.userId.name}
                            src={`${comment.userId.userPhoto}`}
                            sx={{ width: 150, height: 150 }}
                        />
                        <Box sx={{ paddingLeft: '8px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <Typography variant='h6' sx={{ width: '100%', padding: '8px', paddingTop: '0' }} >{comment.userId.name} {comment.userId.lastName}</Typography>
                            <Typography variant="subtitle2" sx={{ width: '100%', display: 'flex', padding: '8px', color: 'black', backgroundColor: 'rgb(180, 181, 182)' }} className='inputTextComment'>{comment.comment}</Typography>
                        </Box>
                    </Box>
                )
            )
            )}
            {props.user ?
                (<Box className='boxInputTextComment' sx={{ margin: '16px', padding: '8px', display: 'flex', flexDirection: 'row-reverse', color: 'white', backgroundColor: 'rgb(18, 18, 22)' }}>
                    <Avatar className='tineraryManagerPhoto mediaQueriesComments'
                        alt={props.user.name}
                        src={`${props.user.userPhoto}`}
                        sx={{ width: 150, height: 150 }}
                    />
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '8px', paddingRigth: '8px' }}>
                            <Typography variant='h6' sx={{ width: '100%', padding: '8px', paddingTop: '0' }} >Add Comment</Typography>
                            <textarea rows='2' onChange={(event) => setInputText(event.target.value)} value={inputText} className='inputTextComment' />
                            <AddIcon onClick={toAdd} sx={{ bgcolor: 'rgb(1, 80, 119)', '&:hover': { bgcolor: 'rgba(1, 80, 119, 0.7)' }, padding: '5px', margin: '5px', marginRigth: '0', color: 'white', width: '30px', height: '30px', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} />
                        </Box>
                    </Box>
                </Box>
                ) : (<Box className='buttonRefLoggin'>
                     <LinkRouter to={'/login'} ><Box className='buttonRefLogginCommits'>Loggin and add commits!</Box></LinkRouter>
                     </Box>
                )
            }
       </Box> 
    )
}

const mapDispatchToProps = {
    addComment: tineraryActions.addComment,
    modifyComment: tineraryActions.modifyComment,
    deleteComment: tineraryActions.deleteComment,
    oneTinerary: tineraryActions.oneTinerary
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)