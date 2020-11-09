import React, { Component } from 'react'


class Article extends Component {
    render() {

        let articleOne = this.props.articleOne
        let articleTwo = this.props.articleTwo

        return (
            <div className="Article">

                <div className="articleCont">
                    <h1 className="articleTitle">{articleOne.title}</h1>
                    <p className="articleContent">{articleOne.content}</p>
                    <div className="commentCont">
                        <h3 className="comments">{articleOne.comments} comments</h3>
                        <h3 className="likes">{articleOne.likes} likes</h3>
                    </div>
                </div>

                <div className="articleCont">
                    <h1 className="articleTitle">{articleTwo.title}</h1>
                    <p className="articleContent">{articleTwo.content}</p>
                    <div className="commentCont">
                        <h3 className="comments">{articleTwo.comments} comments</h3>
                        <h3 className="likes">{articleTwo.likes} likes</h3>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Article