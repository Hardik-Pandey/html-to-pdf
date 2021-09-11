import React, { Fragment } from "react"
import jsPDF from "jspdf"
import Resume from "./Resume"

const generatePdf = () => {
  const doc = new jsPDF("p", "pt", "a4")
  doc.html(document.querySelector("#a4-sheet"), {
    callback: function (pdf) {
      pdf.save("converted-resume.pdf")
    }
  })
}

const App = () => {
  return (
    <Fragment>
      <div className="mb5">
        <button className="generate-pdf-btn" onClick={() => generatePdf()}>Download</button>
      </div>
      <div id="a4-sheet" className="a4-sheet">
        <Resume />
      </div>
    </Fragment>
  )
}

export default App