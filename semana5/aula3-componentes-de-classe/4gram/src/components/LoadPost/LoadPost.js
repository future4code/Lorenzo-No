import React from 'react';
import './LoadPost.css';

class LoadPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCommentField: false,
            liked: false,
            likeButton: 'like-white.svg',
            likesNumber: 0,
            commentsNumber: 0
        }
    }

    onClickLikeButton = () => {
        if (this.state.liked) {
            this.setState ({
                liked: false,
                likeButton: 'like-white.svg',
                likesNumber: 0
            });
        } else {
            this.setState ({
                liked: true,
                likeButton: 'like.svg',
                likesNumber: 1
            })
        }
    }

    onClickCommentButton = () => {
        if (this.state.showCommentField) {
            this.setState ({
                showCommentField: false,
                commentField: ""
            });
        } else {
            this.setState ({
                showCommentField: true,
                commentField: <div className='commentInput'><input type='text' placeholder='Comment...'/><button onClick={this.onClickSendButton}>Send</button></div>
                // Como enviar o comentário apenas se o usuário digitou algo?
            })
        }
    }

    onClickSendButton = () => {
        this.setState ({
            commentsNumber: this.state.commentsNumber + 1,
            showCommentField: false,
            commentField: ""
            // Isso seria a mesma coisa que usar a função onClickCommentButton. Como invocar uma função dentro de outra?
        })
    }

    render() {
        return (
            <section className='post-container'>
                <div className='post-header'>
                    <img src={require('../../img/' + this.props.profilePicture)} alt={this.props.name}/>
                    <h4> {this.props.name} </h4>
                </div>
                <div className='post-photo'>
                <img src={require('../../img/' + this.props.image)} alt={this.props.description}/>
                </div>
                <div className='post-description'>
                    {this.props.description}
                </div>
                <div className='post-footer'>
                    <div className="like">
                        <img onClick={this.onClickLikeButton} src={require('../../img/' + this.state.likeButton)} alt='Like'/>
                        {this.props.likes + this.state.likesNumber}
                    </div>
                    <div className='comment'>
                        <img onClick={this.onClickCommentButton} src={require('../../img/comment.svg')} alt='Comment'/>
                        {this.props.comments + this.state.commentsNumber}
                    </div>
                </div>
                {this.state.commentField}
            </section>
        )
    }
}

export default LoadPost