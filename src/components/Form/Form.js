import React, {useState} from "react";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import {createPost} from '../../actions/postsAction';


const Form = () => {

      const classes = useStyles();
      const dispatch = useDispatch();

      const [postData, setPostData] = useState({
            creator:'',
            characterName:'', 
            desc:'', 
            tags:'', 
            selectedFile:''
      });

      const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(createPost(postData))
      }


      const clear = () => {}

            return (
               <Paper className={classes.Paper}>
                     <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                        <Typography variant="h6">Tell us about your fav Character !😍✨</Typography>

                        <TextField name="creator" variant="outlined" label="Your Name" 
                           fullWidth value={postData.creator} 
                           onChange={(e) => setPostData({...postData, creator: e.target.value})}> 
                        </TextField>

                        <TextField name="characterName" variant="outlined" label="Character Name" 
                           fullWidth value={postData.characterName}
                           onChange={(e) => 
                              setPostData({...postData, characterName: e.target.value})}> 
                        </TextField>

                        <TextField name="desc" variant="outlined" label="Tell Us More" 
                           fullWidth value={postData.desc} 
                           onChange={(e) => setPostData({...postData, desc: e.target.value}) }> 
                        </TextField>

                        <TextField name="tags" variant="outlined" label="Tags" 
                           fullWidth value={postData.tags} 
                           onChange={(e) => setPostData({...postData, tags: e.target.value}) }> 
                        </TextField>
                        
                        <div className={classes.fileInput}>
                              <FileBase type="file" multiple={false} 
                                 onDone = {({base64})=> setPostData({...postData, selectedFile: base64})}/>  
                              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                              <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                        </div>


                     </form>
               </Paper>
            );
}

export default Form;