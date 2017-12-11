import React from 'react';
import SingleArticle from '../../components/singleArticle/singleArticle';

export default class Article extends React.Component{
    render(){
        return(
            <div>
                <SingleArticle></SingleArticle>
                <SingleArticle></SingleArticle>
                <SingleArticle></SingleArticle>
                <SingleArticle></SingleArticle>
            </div>
        )
    }
}