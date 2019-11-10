/**
 * pdf
 */
import React from "react";
import PDFJS from "pdfjs-dist";
import "./style";

function PDF(props) {
  React.useEffect(() => {
    loadPDF(props.file && props.file.split("?")[0]);
  }, [props.file]);

  const loadPDF = (fileURL) => {
    PDFJS.getDocument(fileURL).then(function(pdf) {
      //用 promise 获取页面
      var id = "";
      var idTemplate = "cw-pdf-";
      var pageNum = pdf.numPages;
      //创建和pdf页面数一样的画布
      for (var j = 1; j <= pageNum; j++) {
        id = idTemplate + j;
        // this.createPdfContainer(id, "pdfClass");
        var pdfContainer = document.querySelector(".pdfBox");
        var canvasNew = document.createElement("canvas");
        canvasNew.id = id;
        canvasNew.className = "pdfConterBoxCanvas";
        pdfContainer.appendChild(canvasNew);
      }
      //将pdf渲染到画布上去
      for (var i = 1; i <= pageNum; i++) {
        let ids = idTemplate + i;
        pdf.getPage(i).then(function(page) {
          var scale = 1.7;
          var viewport = page.getViewport(scale);
          //  准备用于渲染的 canvas 元素
          var canvas = document.getElementById(ids);
          var context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          // 将 PDF 页面渲染到 canvas 上下文中
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
        });
      }
    });
  };

  return <div className="pdfBox" />;
}

export default PDF;
