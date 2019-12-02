import React from 'react';
import LoadPost from '../LoadPost/index' // Não consegui usar aqui :(

class CreateNewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        user: '',
        profilePicture: '',
        postImage: '',
        newPost: ''
        }
    }

    handleInputChangeUser = (e) => {
        this.setState ({
            user: e.target.value
        })
    }

    handleInputChangeProfilePicture = (e) => {
        this.setState ({
            profilePicture: e.target.value
        })
    }

    handleInputChangePostImage = (e) => {
        this.setState ({
            postImage: e.target.value
        })
    }

    SubmitPost = () => {
        this.setState ({
            newPost: <div><section className='post-container'>
                        <div className='post-header'>
                            <img src={this.state.profilePicture} alt={this.state.user}/>
                            <h4> {this.state.user} </h4>
                        </div>
                        <div className='post-photo'>
                            <img src={this.state.postImage} alt='Post'/>
                        </div>
                    </section>
                    {this.state.newPost}</div>, // Na verdade eu queria usar o componente (?) LoadPost, mas não sabia como. Então fiz um migué de copiar parte do return dele aqui.
                    // O problema é que precisaria copiar as funções (?) e eu não sei fazer isso dentro de uma outra função (?).
            user: ''
        })

    }

    render() {
        return (
            <div>
                <section>
                    User:<input type='text' onChange={this.handleInputChangeUser} value={this.state.user}/>
                    Profile Picture URL:<input type='text' onChange={this.handleInputChangeProfilePicture} value={this.state.profilePicture}/>
                    Post Image URL:<input type='text' onChange={this.handleInputChangePostImage} value={this.state.postImage}/>
                    <button onClick={this.SubmitPost}>Submit</button>
                </section>
                {this.state.newPost}
            </div>
        )
    }
}

export default CreateNewPost