import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();  //prevents page from refreshing (default action)
        const blog = {title, body, author}; //blog object

        setIsPending(true);

        fetch('http://localhost:8000/blogs', { //2nd argument {...}
            method: 'POST', //post request
            headers: { "Content-Type": "application/json"}, // telling server json data is being sent 
            body: JSON.stringify(blog) //object being sent; JSON string form of the object
        }).then(() => {
            console.log('new blog added')
            setIsPending(false);
            // navigate(-1); //go back 1 through history
            // navigate(1); //go forward 1 through history
            navigate('/'); //redirect to home page
        })

        
    }
    
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;