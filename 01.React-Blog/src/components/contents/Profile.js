import React, { Component } from 'react';

import '../styles/Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="content-inner text-center">
                <div className="row row-bottom-padded-sm">
                    <div className="col-md-12">
                        <figure>
                            <img src={'/images/ttt.jpg'} alt="profile.jpg" />
                        </figure>
                        <h1>AgungTuanany</h1>
                        <p>
                            born and raised in <a href="#">brooklyn</a>. far far
                            away, behind the word mountains, far from the
                            countries vokalia and consonantia, there live the
                            blind texts. separated they live in bookmarksgrove
                            right at the coast of the <a href="#">semantics</a>,
                            a large language ocean. a small river named duden
                            flows by their place and supplies it with the
                            necessary regelialia.{' '}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 counter">
                        <div className="number left">10</div>
                        <div className="text">
                            <h3 className="border-bottom">
                                Years of experience in Web Design
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries.
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="social">
                    <li>
                        <a href="#">
                            <i
                                className="fa fa-envelope-o"
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-github" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i
                                className="fa fa-linkedin-square"
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" rel="website">
                            <i className="fa fa-code" aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Profile;
