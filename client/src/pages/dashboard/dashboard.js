import React from 'react'

const Dashboard = () => {
    return(
        <>
            <div>DASHBOARD</div>
            <br />
            <div id="progress-container container">
                <div id="row">
                    <div>Your Progress</div>
                </div>
                <br />
                <div className="row">

                    <div className="col-3">
                        Module 1
                    </div>
                    <div className="col-9">
                        {/* <i class="far fa-check-square"></i> */}
                        COMPLETE
                    </div>

                    <div className="col-3">
                        Module 2
                    </div>
                    <div className="col-9">
                        {/* <i class="far fa-check-square"></i> */}
                        INCOMPLETE
                    </div>

                    <div className="col-3">
                        Module 3
                    </div>
                    <div className="col-9">
                        INCOMPLETE
                        {/* <i class="far fa-check-square"></i> */}
                    </div>

                    <div className="col-3">
                        Module 4
                    </div>
                    <div className="col-9">
                        INCOMPLETE
                        {/* <i class="far fa-check-square"></i> */}
                    </div>

                    <div className="col-3">
                        Module 5
                    </div>
                    <div className="col-9">
                        COMPLETE
                        {/* <i class="far fa-check-square"></i> */}
                    </div>

                </div>
            </div>
                <br />
                <div className="row">
            </div>
        </>
    )
}

export default Dashboard