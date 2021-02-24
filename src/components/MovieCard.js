import React from 'react'
import Data from './static/data.json';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin:0;
  padding:0;
  
`;




function  MovieCard(){
    return (
        <Wrapper className="MovieCard">
              
              <div className="posts">
                  {Data.map(post => {

                      return(
                            <div key={post.id}>
                                
                                <div className="container">
                                    <p className="title">{post.Title}</p>
                                    
                                        <img src={`/images/${post.Image}`} alt="Cinque" />
                                            <p className="top-left"><img src={`/images/${post.Avatar}`} alt="Cinque" /></p>
                                            <p className="bottom-left"><img src={`/images/${post.Image2}`} alt="Cinque" /></p>
                                        <div className="middle-left">
                                            <p className="text-one">{post.Watching}</p>
                                            <h1 className="text-two">{post.Subtitle}</h1>
                                            <p className="text-three">{post.Year}</p>

                                        </div>
                                        <div className="centered">
                                            <p className="imdb-block"><img src={`/images/${post.IMDB}`} alt="Cinque" /></p>
                                            <p className="rate-block">{post.Rate}<span className="ratevalue">{post.Ratevalue}</span></p>
                                        </div>
                                        <div className="bottom-right">
                                            <div className="director-block">
                                                <p>Director:</p>
                                                <p>Stars:</p>
                                            </div>
                                            <div className="director-value">
                                                <p>{post.Director}</p>
                                                <p>{post.Stars}</p>
                                            </div>
                                            
                                        </div>
                                </div>
                            </div>
                      )
                  })}
              </div>
        </Wrapper>
    
    )
}


export default  MovieCard