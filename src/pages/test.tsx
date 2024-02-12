import React from "react";

const test = () => {
  return (
    <>
      <div className="tab-content" id="myTabContent">
        {/* <!-- Description Tab --> */}
        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div className="tab-single">
            <div className="row">
              <div className="col-12">
                <div className="single-des">
                  <p>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    deskto
                  </p>
                </div>
                <div className="single-des">
                  <p>
                    Suspendisse consequatur voluptates lorem nobis accumsan
                    natus mattis. Optio pede, optio qui metus, delectus!
                    Ultricies impedit, minus tempor fuga, quasi, pede felis
                    commodo bibendum voluptas nisi? Voluptatem risus tempore
                    tempora. Quaerat aspernatur? Error praesent laoreet, cras in
                    fames hac ea, massa montes diamlorem nec quaerat, quos
                    occaecati leo nam aliquet corporis, ab recusandae
                    parturient, etiam fermentum, a quasi possimus commodi,
                    mollis voluptate mauris mollis, quisque donec
                  </p>
                </div>
                <div className="single-des">
                  <h4>Product Features:</h4>
                  <ul>
                    <li>long established fact.</li>
                    <li>has a more-or-less normal distribution. </li>
                    <li>lmany variations of passages of. </li>
                    <li>generators on the Interne.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ End Description Tab --> */}
        {/* <!-- Reviews Tab --> */}
        <div className="tab-pane fade" id="reviews" role="tabpanel">
          <div className="tab-single review-panel">
            <div className="row">
              <div className="col-12">
                <div className="ratting-main">
                  <div className="avg-ratting">
                    <h4>
                      4.5 <span>(Overall)</span>
                    </h4>
                    <span>Based on 1 Comments</span>
                  </div>
                  {/* <!-- Single Rating --> */}
                  <div className="single-rating">
                    <div className="rating-author">
                      {/* <img src="https://via.placeholder.com/200x200" alt="#"> */}
                    </div>
                    <div className="rating-des">
                      <h6>Naimur Rahman</h6>
                      <div className="ratings">
                        <ul className="rating">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-half-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <div className="rate-count">
                          (<span>3.5</span>)
                        </div>
                      </div>
                      <p>
                        Duis tincidunt mauris ac aliquet congue. Donec
                        vestibulum consequat cursus. Aliquam pellentesque nulla
                        dolor, in imperdiet.
                      </p>
                    </div>
                  </div>
                  {/* <!--/ End Single Rating --> */}
                  {/* <!-- Single Rating --> */}
                  <div className="single-rating">
                    <div className="rating-author">
                      {/* <img src="https://via.placeholder.com/200x200" alt="#"> */}
                    </div>
                    <div className="rating-des">
                      <h6>Advin Geri</h6>
                      <div className="ratings">
                        <ul className="rating">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <div className="rate-count">
                          (<span>5.0</span>)
                        </div>
                      </div>
                      <p>
                        Duis tincidunt mauris ac aliquet congue. Donec
                        vestibulum consequat cursus. Aliquam pellentesque nulla
                        dolor, in imperdiet.
                      </p>
                    </div>
                  </div>
                  {/* <!--/ End Single Rating --> */}
                </div>
                {/* <!-- Review --> */}
                <div className="comment-review">
                  <div className="add-review">
                    <h5>Add A Review</h5>
                    <p>
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                  </div>
                  <h4>Your Rating</h4>
                  <div className="review-inner">
                    <div className="ratings">
                      <ul className="rating">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Review --> */}
                {/* <!-- Form --> */}
                <form className="form" method="post" action="mail/mail.php">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>
                          Your Name<span>*</span>
                        </label>
                        <input type="text" name="name" placeholder="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>
                          Your Email<span>*</span>
                        </label>
                        <input type="email" name="email" placeholder="" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="form-group">
                        <label>
                          Write a review<span>*</span>
                        </label>
                        <textarea name="message" placeholder=""></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="form-group button5">
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* <!--/ End Form --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ End Reviews Tab --> */}
      </div>
    </>
  );
};

export default test;
