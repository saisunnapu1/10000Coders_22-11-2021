let Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <footer className="text-center text-lg-start text-white footer_bg">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                  {/* <!-- <h5 className="text-uppercase">FOOTER CONTENT</h5> --> */}
                  <img
                    src="https://www.10000coders.co/assets/10000coders-logo.png?v=1.0"
                    alt="logo"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae modi cum ipsam ad, illo possimus laborum ut
                    reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                    eaque? Reiciendis assumenda iusto sapiente inventore animi?
                  </p>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
      {/* <!-- The Login Modal --> */}
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">Login to Account</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">
              <form action="#" id="loginForm">
                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="pwd" class="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                  />
                </div>
                <div class="form-check mb-3">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="remember"
                    />{" "}
                    Remember me
                  </label>
                </div>
              </form>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-primary"
                form="loginForm"
                formmethod="POST"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
