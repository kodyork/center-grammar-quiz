/* --- メインスクリプト --- */
document.addEventListener('DOMContentLoaded', function() {

  /* --- 1. 簡易パスワード機能 (index.html専用) --- */
  const loginSection = document.getElementById('login-section');
  const quizContent = document.getElementById('quiz-content');
  const loginForm = document.getElementById('login-form');

  // index.html の場合のみ、このログイン処理を実行
  if (loginForm && quizContent) {

    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ↓↓↓ ここにお好きなパスワードを設定してください ↓↓↓

    const PASSWORD = "grammarnazi19"; // 例: "eigoquiz123" など

    // ↑↑↑ ここにお好きなパスワードを設定してください ↑↑↑
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

    // フォームが送信されたときの処理
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // ページの再読み込みを防ぐ

      const passwordInput = document.getElementById('password-input');
      const loginError = document.getElementById('login-error');

      // パスワードが一致した場合
      if (passwordInput.value === PASSWORD) {
        loginSection.style.display = 'none'; // ログインフォームを隠す
        quizContent.style.display = 'block'; // クイズ一覧を表示する
        loginError.style.display = 'none'; // エラーメッセージを隠す
      } else {
        // パスワードが間違っていた場合
        loginError.style.display = 'block'; // エラーメッセージを表示
        passwordInput.value = ""; // 入力をクリア
      }
    });
  }


  /* --- 2. クイズの個別採点機能 (各クイズページ用) --- */
  const quizContainer = document.querySelector('.quiz-container');

  if (quizContainer) {

    let correctAnswers = {};
    const pageTitleElement = document.querySelector('head title');
    const pageTitle = pageTitleElement ? pageTitleElement.innerText.trim() : '';

    // ページタイトルに基づいて正解データを読み込む
    // (注: メインサイトの哲学・国際問題クイズのデータは不要なため削除しました)

    // --- 英語学習 (センター試験) ---
    if (pageTitle.includes('センター試験 文法語法クイズ 1990')) {
       correctAnswers = { q1:'2', q2:'3', q3:'2', q4:'1', q5:'3', q6:'2', q7:'3', q8:'2', q9:'1', q10:'1', q11:'1', q12:'2', q13:'1', q14:'2' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1991')) {
       correctAnswers = { q1:'2', q2:'4', q3:'4', q4:'2', q5:'1', q6:'1', q7:'4', q8:'2', q9:'3', q10:'1', q11:'1', q12:'3', q13:'4', q14:'3', q15:'2', q16:'3', q17:'3' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1992')) {
       correctAnswers = { q1:'3', q2:'4', q3:'4', q4:'2', q5:'4', q6:'4', q7:'4', q8:'4', q9:'4', q10:'3', q11:'3', q12:'3', q13:'3', q14:'3', q15:'3', q16:'1', q17:'2' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1993')) {
        correctAnswers = { q1:'1', q2:'1', q3:'1', q4:'3', q5:'3', q6:'3', q7:'2', q8:'3', q9:'4', q10:'2', q11:'2', q12:'1', q13:'3', q14:'1', q15:'4', q16:'3', q17:'3' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1994')) {
      correctAnswers = { q1:'4', q2:'1', q3:'3', q4:'2', q5:'4', q6:'3', q7:'2', q8:'3', q9:'3', q10:'4', q11:'2', q12:'2', q13:'1', q14:'4', q15:'4', q16:'2', q17:'2' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1995')) {
      correctAnswers = { q1:'3', q2:'3', q3:'4', q4:'4', q5:'3', q6:'4', q7:'3', q8:'4', q9:'2', q10:'3', q11:'3', q12:'2', q13:'3', q14:'2', q15:'3' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1996')) {
      correctAnswers = { q1:'2', q2:'4', q3:'1', q4:'3', q5:'3', q6:'2', q7:'2', q8:'3', q9:'2', q10:'4', q11:'2', q12:'2', q13:'1', q14:'2', q15:'4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1997')) {
      correctAnswers = { q1:'2', q2:'3', q3:'3', q4:'4', q5:'3', q6:'1', q7:'4', q8:'2', q9:'1', q10:'3', q11:'3', q12:'1', q13:'3', q14:'1' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1998')) {
      correctAnswers = { q1:'4', q2:'4', q3:'4', q4:'3', q5:'3', q6:'3', q7:'3', q8:'1', q9:'2', q10:'2', q11:'1', q12:'2', q13:'3', q14:'4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 1999')) {
      correctAnswers = { q1:'3', q2:'1', q3:'2', q4:'4', q5:'1', q6:'4', q7:'4', q8:'4', q9:'3', q10:'1', q11:'4', q12:'3', q13:'1', q14:'4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2000')) {
      correctAnswers = { q1: '3', q2: '2', q3: '2', q4: '3', q5: '1', q6: '4', q7: '1', q8: '3', q9: '1', q10: '2', q11: '2' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2001')) {
      correctAnswers = { q1: '2', q2: '4', q3: '1', q4: '3', q5: '2', q6: '3', q7: '4', q8: '1', q9: '3', q10: '1' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2002')) {
      correctAnswers = { q1: '2', q2: '2', q3: '4', q4: '4', q5: '3', q6: '2', q7: '3', q8: '1', q9: '3', q10: '2' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2003')) {
      correctAnswers = { q1: '4', q2: '3', q3: '1', q4: '2', q5: '3', q6: '1', q7: '1', q8: '3', q9: '4', q10: '4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2004')) {
      correctAnswers = { q1: '4', q2: '3', q3: '3', q4: '4', q5: '1', q6: '3', q7: '4', q8: '3', q9: '3', q10: '2' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2005')) {
      correctAnswers = { q1: '1', q2: '3', q3: '1', q4: '3', q5: '1', q6: '2', q7: '3', q8: '2', q9: '2', q10: '4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2006')) {
      correctAnswers = { q1: '3', q2: '4', q3: '1', q4: '4', q5: '1', q6: '2', q7: '2', q8: '3', q9: '1', q10: '1' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2007')) {
      correctAnswers = { q1: '4', q2: '2', q3: '4', q4: '4', q5: '4', q6: '1', q7: '4', q8: '3', q9: '1', q10: '2', q11: '1' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2008')) {
      correctAnswers = { q1: '1', q2: '4', q3: '1', q4: '1', q5: '1', q6: '4', q7: '4', q8: '4', q9: '4', q10: '3' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2009')) {
      correctAnswers = { q1: '4', q2: '2', q3: '1', q4: '1', q5: '3', q6: '1', q7: '3', q8: '1', q9: '2', q10: '3' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2010')) {
      correctAnswers = { q1: '4', q2: '3', q3: '4', q4: '3', q5: '4', q6: '4', q7: '4', q8: '3', q9: '1', q10: '1' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2011')) {
      correctAnswers = { q1: '1', q2: '3', q3: '1', q4: '1', q5: '2', q6: '1', q7: '2', q8: '4', q9: '3', q10: '2' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2012')) {
      correctAnswers = { q1: '3', q2: '1', q3: '1', q4: '2', q5: '4', q6: '1', q7: '2', q8: '1', q9: '1', q10: '4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2013')) {
      correctAnswers = { q1: '4', q2: '4', q3: '1', q4: '3', q5: '1', q6: '1', q7: '1', q8: '4', q9: '1', q10: '2' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2014')) {
      correctAnswers = { q1: '2', q2: '3', q3: '3', q4: '1', q5: '2', q6: '4', q7: '4', q8: '2', q9: '3', q10: '4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2015')) {
      correctAnswers = { q1: '1', q2: '3', q3: '3', q4: '2', q5: '1', q6: '3', q7: '1', q8: '4', q9: '4', q10: '4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2016')) {
      correctAnswers = { q1: '1', q2: '1', q3: '2', q4: '4', q5: '2', q6: '1', q7: '1', q8: '3', q9: '1', q10: '4' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2017')) {
      correctAnswers = { q1: '1', q2: '2', q3: '4', q4: '1', q5: '2', q6: '3', q7: '4', q8: '1', q9: '3', q10: '1' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2018')) {
      correctAnswers = { q1: '3', q2: '2', q3: '1', q4: '4', q5: '1', q6: '3', q7: '1', q8: '3', q9: '3', q10: '3' };
    } else if (pageTitle.includes('センター試験 文法語法クイズ 2019')) {
      correctAnswers = { q1: '2', q2: '3', q3: '1', q4: '2', q5: '4', q6: '3', q7: '3', q8: '2', q9: '4', q10: '4' };
    }


    // 個別チェックボタンのイベントリスナーを設定 (イベント委任)
    if (Object.keys(correctAnswers).length > 0) {
         quizContainer.addEventListener('click', function(event) {
           if (event.target.classList.contains('check-single-answer-btn')) {
             const checkButton = event.target;
             const questionElement = checkButton.closest('.quiz-question');
             if (!questionElement) return;

             const questionId = questionElement.id;
             const selectedOption = questionElement.querySelector(`input[name="${questionId}"]:checked`);
             const answerElement = questionElement.querySelector('.quiz-answer');
             const options = questionElement.querySelectorAll(`input[name="${questionId}"]`);

             if (!selectedOption) {
               alert('Please select an answer first.');
               return;
             }

             questionElement.classList.remove('correct', 'incorrect');
             if (correctAnswers.hasOwnProperty(questionId) && selectedOption.value === correctAnswers[questionId]) {
               questionElement.classList.add('correct');
             } else {
               questionElement.classList.add('incorrect');
             }

             if (answerElement) {
               answerElement.style.display = 'block';
             }

             options.forEach(option => option.disabled = true);
             checkButton.disabled = true;
             checkButton.textContent = 'Checked';
           }
         });
    } else {
        // クイズページ（.quiz-container がある）なのに正解データが読み込まれなかった場合
        //（index.html の場合は .quiz-container がないので、ここは実行されない）
        if (quizContainer.querySelector('.check-single-answer-btn')) {
            console.error("Quiz checking function error: Correct answers not loaded. Check page title and script's if/else if conditions. Page Title:", pageTitle);
        }
    }
  } // End if (quizContainer)


  /* --- 3. 穴埋め問題（クリック表示）機能 (メインサイト用なので、ここでは不要) --- */
  // const articleContent = document.querySelector('.post article');
  // ... (穴埋め機能のコードは省略) ...

}); // End of DOMContentLoaded
