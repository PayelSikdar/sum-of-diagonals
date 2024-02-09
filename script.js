const container = document.getElementsByClassName("container")[0];

const resultContainer = document.getElementsByClassName("result-container")[0];

document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".question-box").style.display = "none";
    function printDiagonalSums(mat, n) {
        let principal = 0, secondary = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {


                if (i == j)
                    principal += mat[i][j];


                if ((i + j) == (n - 1))
                    secondary += mat[i][j];
            }
        }
        resultContainer.style.display="block";
        resultContainer.innerHTML = "Principal Diagonal: " + principal + "<br>" + "Secondary Diagonal:" + secondary + "<br>"


    }
    printDiagonalSums(a, 4);
})



let a = [[1, 2, 3, 4], [5, 6, 7, 8],
[9, 10, 11, 12], [13, 14, 15, 16]];


