{/* <div id="first-div-main "> </div>
<section class='home-section mb-5 '>
    <h2 class="h2-font pt-5">Hero Section</h2>
</section>
<div id="carouselExampleIndicators" class="carousel slide mb-1" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active ">
            <img class="d-block w-100 m-heroSecImg" src="{{hereSecActiveImg.img}}" alt="First slide">
        </div>

        {{#each hereSecOtherImg}}
        <div class="carousel-item ">
            <img class="d-block w-100 m-heroSecImg" src="{{this.img}}" alt="Second slide">
        </div>
        {{/each }}
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>







<section class="mb-1 mt-5">
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-6">
                <h2 class=" h2-font mb-3 mt-3">Browse By Property Type</h2>
            </div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3 main-col">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{firsttypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{firsttypeFirstObj.type}}</h4>
                                            <p class="card-text">{{firsttypeFirstObj.details}}</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 hidden-sm-down">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{secondTypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{secondTypeFirstObj.type}}</h4>
                                            <p class="card-text">{{secondTypeFirstObj.details}}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 hidden-sm-down">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{thirdTypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{thirdTypeFirstObj.type}}</h4>
                                            <p class="card-text">{{thirdTypeFirstObj.details}}</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{fourthTypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{fourthTypeFirstObj.type}}</h4>
                                            <p class="card-text">{{fourthTypeFirstObj.details}}</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{fifthTypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{fifthTypeFirstObj.type}}</h4>
                                            <p class="card-text">{{fifthTypeFirstObj.details}}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{sixthTypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{sixthTypeFirstObj.type}}</h4>
                                            <p class="card-text">{{sixthTypeFirstObj.details}}</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{seventhTypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{seventhTypeFirstObj.type}}</h4>
                                            <p class="card-text">{{seventhTypeFirstObj.details}}</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{eighthTypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{eighthTypeFirstObj.type}}</h4>
                                            <p class="card-text">{{eighthTypeFirstObj.details}}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="{{ninethTypeFirstObj.small_img}}">
                                        <div class="card-body">
                                            <h4 class="card-title">{{ninethTypeFirstObj.type}}</h4>
                                            <p class="card-text">{{ninethTypeFirstObj.details}}</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>










<section>
    <div class="container">
        <div class="row ">
            <div class="col-6">
                <h2 class="mb-3 text-left h2-font">Browse By Location Type</h2>
            </div>

            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">


                    <div class="row">

                        <div class="col-md-3 mb-3">
                            <div class="card">
                                <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
                                <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <div class="card">
                                <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">
                                <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <div class="card">
                                <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">
                                <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <div class="card">
                                <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a">
                                <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
</section>







<section>
    <div class="container">
        <div class="row ">
            <div class="col-6">
                <h2 class="mb-3 text-left h2-font">Browse By Location Type</h2>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                    <div class="row ">
                        {{#each torontoBanffObj }}
                        <div class="col-md-6 mb-3">
                            <div class="card">
                                <img class="img-fluid  mosaic-images" alt="100%x280" src="{{this.large_img}}">
                                <div class="card-img-overlay text-white">
                                    <h4 class="card-title">{{this.location}}</h4>
                                    <img class="m_flag_img" src="{{this.flag}}" alt="">
                                </div>
                            </div>
                        </div>
                        {{/each}}
                        {{#each getOtherLocationObjs}}
                        <div class="col-md-4 mb-3">
                            <div class="card ">
                                <img class="img-fluid  mosaic-images " alt="100%x280" src="{{this.large_img}}">
                                <div class="card-img-overlay text-white">
                                    <h4 class="card-title">{{this.location}}</h4>
                                    <img class="m_flag_img" src="{{this.flag}}" alt="">
                                </div>
                            </div>
                        </div>
                        {{/each}}
                    </div>
                </div>
            </div>
        </div>
</section>



<br><br><br><br>
<section mb-5>
    <div class="container">
        <div class="row ">
            <div class="col-6">
                <h2 class="mb-3 text-left h2-font">Inspiration For Your Next Destination</h2>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                    <div class="row ">
                        {{!-- <a href="https://www.google.ca/"> --}}
                            <div class="col-md-6 mb-3">
                                <div class="card">
                                    <img class="img-fluid " alt="100%x280" src="../img/discoverMoreImg/4.jpg">
                                    <div class="card-img-overlay text-white">
                                        <h4 class="card-title"> </h4>
                                        <img class="m_flag_img" src="" alt="">
                                    </div>

                                </div>
                            </div>
                            {{!--
                        </a> --}}
                        {{!-- <a href="https://www.google.ca/"> --}}
                            <div class="col-md-6 mb-3">

                                <div class="card">
                                    <img class="img-fluid " alt="100%x280" src="../img/discoverMoreImg/4.jpg">
                                    <div class="card-img-overlay text-white">
                                        <h4 class="card-title"></h4>
                                        <img class="m_flag_img" src="" alt="">
                                    </div>

                                </div>
                            </div>
                            <div class="row ">
                                {{!--
                        </a> --}}
                        {{!-- <a href="https://www.google.ca/"> --}}
                            <div class="col-md-4 mb-3">
                                <div class="card ">
                                    <img class="img-fluid" alt="100%x280" src="../img/discoverMoreImg/23.jpg">
                                    <div class="card-img-overlay text-white">
                                        <h4 class="card-title">{{this.location}}</h4>
                                        <img class="m_flag_img" src="{{this.flag}}" alt="">
                                    </div>
                                </div>
                            </div>

                            {{!--
                        </a> --}}
                        {{!-- <a href="https://www.google.ca/"> --}}
                            <div class="col-md-4 mb-3">
                                <div class="card ">
                                    <img class="img-fluid" alt="100%x280" src="../img/discoverMoreImg/23.jpg">
                                    <div class="card-img-overlay text-white">
                                        <h4 class="card-title">{{this.location}}</h4>
                                        <img class="m_flag_img" src="{{this.flag}}" alt="">
                                    </div>
                                </div>
                            </div>
                            {{!--
                        </a> --}}
                        {{!-- <a href="https://www.google.ca/"> --}}
                            <div class="col-md-4 mb-3">
                                <div class="card ">
                                    <img class="img-fluid" alt="100%x280" src="../img/discoverMoreImg/23.jpg">
                                    <div class="card-img-overlay text-white">
                                        <h4 class="card-title">{{this.location}}</h4>
                                        <img class="m_flag_img" src="{{this.flag}}" alt="">
                                    </div>
                                </div>
                            </div>
                            {{!--
                        </a> --}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}