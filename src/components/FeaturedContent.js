import React from "react";

export default function FeaturedContent() {
  return (
    <React.Fragment>
      <section id="featured-videos" class="home-section featured-videos">
        <div class="container">
          <div class="featured-video-wrap">
            <div class="featured-playlist" id="slider">
              <div class="playlist-current-item" id="carousel-bounding-box">
                <div class="carousel slide" id="myCarousel">
                  <div class="carousel-inner">
                    <div class="item slide-number-203 active">
                      <div class="youtube-player" data-id="nSyuokTJxX0">
                      <iframe width="710" height="425"  src="https://www.youtube.com/embed/nSyuokTJxX0" frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </div>
                    <div class="item slide-number-201">
                      <div class="youtube-player" data-id="2nMeZoW6xUs">
                      <iframe width="710" height="425" 
                      src="https://www.youtube-nocookie.com/embed/Mju-ZzgoDAM" 
                      frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen></iframe>
                      </div>
                    </div>
                    <div class="item slide-number-199">
                      <div class="youtube-player" data-id="lvXhP5jZhs4">
                      <iframe width="710" height="425"  src="https://www.youtube.com/embed/lvXhP5jZhs4" frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="playlist-tracks" id="slider-thumbs">
                <div
                  class="playlist-item playlist-playing"
                  id="carousel-selector-203"
                  data-id="203"
                  data-type="youtube"
                >
                  <img
                    src="/static/image/award.jpg"
                    width="175px" height="100px"
                    alt="Playlist image"
                    scale="0"
                  />
                  <div class="playlist-caption">
                    <span class="playlist-item-title">
                      Fifth annual Mahlet event
                    </span>
                    <span class="video-time">0:14</span>
                  </div>
                </div>
                <div
                  class="playlist-item"
                  id="carousel-selector-201"
                  data-id="201"
                  data-type="youtube"
                >
                  <img
                    src="/static/image/tesfaye-gabisso.jpg"
                    width="175px" height="100px"
                    alt="Playlist image"
                    scale="0"
                  />
                  <div class="playlist-caption">
                    <span class="playlist-item-title">
                      Pastor Tesfaye Gabiso (Hizbin Abeza)
                    </span>
                  </div>
                </div>
                <div
                  class="playlist-item"
                  id="carousel-selector-199"
                  data-id="199"
                  data-type="youtube"
                >
                  <img
                    src="/static/image/mahlet.jpeg"
                    width="175px" height="100px"
                    alt="Playlist image"
                    scale="0"
                  />
                  <div class="playlist-caption">
                    <span class="playlist-item-title">
                    Pastor Tesfaye Gabiso (Nefse Hoy)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
