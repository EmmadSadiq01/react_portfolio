import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
const SkillsProgress = (props) => {
    return (
        <div className="col-6 my-2">
            <div className="progress_box">
                <div className="row">
                    <div className="col-4">
              <div className="progress_title">
                <h4 className="white">{props.title}</h4>
              </div>

                    </div>
                    <div className="col-8">
              <div className="myProgress">
                <ProgressBar
                  now={props.fill}
                  label={props.fill+"%"}
                />
              </div>

                    </div>
                </div>
            </div>
          </div>
    )
}

export default SkillsProgress
