import React, { Component } from 'react'
export class NewsItem extends Component {
    static propTypes = {

    }
    render() {
        let { title, description, urlToImage, newsUrl, author, date, dark, light } = this.props;
        return (
            <>
                <div className="card mb-3 mx-2" style={{padding:"0px", maxWidth: "540px", border:"none" }}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex">
                            <img src={urlToImage} style={{ objectFit: "cover" }} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className={`card-body bg-${dark} text-${light}`}>
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p  className="card-text my-0"><small className="text-muted">{author}</small></p>
                                <p className="card-text"><small className="text-muted">Publish at {new Date(date).toGMTString().slice(0, new Date(date).toGMTString().length - 3)}</small> <button className="btn-sm btn-dark"> <a href={newsUrl} style={{ boxShadow: "none", textDecoration:"none" }} target="_blank" className="btn-sm btn-dark">Read More</a></button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
