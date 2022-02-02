import React, { Component } from 'react'
import NewsItem from './NewsItem';
export class News extends Component {
    static defaulProps = {

    }
    static propTypes = {

    }
    constructor() {
        super();
        this.state = {
            articles: [],
        }
    }
    async componentDidMount() {
        console.log("CDM");
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState({
            articles: parseData.articles,
            totalResult: parseData.totalResult
        })
        
    }
    render() {
        let {TextColor, dark, light} = this.props;
        return (
            <div>
                <div className="container ">
                    <h2 className="text-center mt-2" style={TextColor}>NewsMoney - Latest News</h2>
                    <div className="row d-flex  justify-content-center">
                            {this.state.articles.map((element) => {
                                return <NewsItem dark={dark} light= {light} key={element.url} title={element.title?element.title.slice(0,50)+"...":"Unknown"} description={element.description?element.description.slice(0,171)+"...":"Description in not found"} urlToImage={element.urlToImage?element.urlToImage:"https://i.pinimg.com/originals/fd/78/c4/fd78c47f2a009df65b5b5a46f4437399.png"} url={element.url} newsUrl = {element.url}  author = {element.author?element.author:"Author name not found"} date = {element.publishedAt}/>
                            })}
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default News
