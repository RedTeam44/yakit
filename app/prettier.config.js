--- The proposal/justification ---

My solution for the client would be to create a website that provides the students with an easy to use place that helps them revise the work they have been doing with tutor and create an easy way for the tutor to track the progress of their students. This website will have a student or teacher option when signing up so that once the user is logged in the website can be more tailored to what the user would be using it for.

One of the pages for this website would offer a wide variety of courses for the students and "provide access to digital content to encourage wider learning". These will help them go back over the topics they have been learning to retain and reinforce the information in their mind. This page would display all the courses on offer with a navigation bar to help find the course they want. These courses would display the information that the student has been learning about and then ask them basic questions about that information. E.g. for English asking them a multiple-choice question about what a certain word means. I've come up with this solution after looking at a website called Seneca that can been seen in my appendix or in my sources table. This is also what I am basing the look of my website on.

Another page of this website that is only accessible by a tutor would allow them to "monitor the learner progress" their students are making on each course showing things like the speed they are getting through each course, how many questions they're getting right and an estimation of how well they seem to be comprehending the task. And after seeing this information the tutor can then leave comments for the students to see. Providing "interactive teaching" that can help the student in their weaker areas. The Tutor will also be able to set deadlines so that the student knows how long they have to complete it. I got the idea of tracking the student's data in each course from go student that can been seen in my appendix.

To incorporate the features customers and tutors would want into the solution like "gamified learning" I would also make a page that allows tutors or students to create their own quizzes that students can do. These quizzes once done would show the score each student is getting on a leader board providing a competitive aspect to their learning and to try and make the quizzes seem more fun than just another bit of work to be done powerups can be added in that can provide students with different advantages during the quiz e.g. one powerup could remove some of the wrong answers so there's a better chance they get it right. I thought up this solution when looking at websites like kahoot and quizzz that can be seen in my appendix and in my sources table.

--- Abilities ---

Student:
- Use any of the courses available on the website
- See the results on each course once they've finished it
- Make their own quizzes
- Use other users' quizzes
- View the leader boards
- View other users' profiles
- Add other users as friends
- Customise their profile using the rewards they get
- Show off various achievements through badges
- Change the text size or use text to speech

Tutors:
- Use any of the courses available
- Request new courses to be made
- See the progress their students are making on the courses
- Get more detailed data on how well their students are doing with each course
- Make their own quizzes
- View leader boards
- Send a reward to students
- Comment on a student's course
- Set deadlines for courses to be done
- Change the text size or use text to speech

--- Mitigation of potential risks ---

One potential risk that could occur is that the website could have glitches that weren’t found or there could be issues for certain users when trying to use the website. This will be mitigated by having a customer support section where any potential problems a user has can be reported and then dealt with.

Another risk is that Users may forget their account information and so a forgot username/password option will be available for them if needed.

--- Functional requirements ---

No. | Features | Priority | Justification

1   | Users are able to sign up | HIGH | The user won’t be able to use any features on the website if this doesn’t work

2   | Users are able to log in | HIGH | The user won’t be able to get back into the website if this doesn’t work

3   | Send an email to the customer when they make an account | LOW | This is just a check that the system has the right credentials

4   | System will record user data on courses | HIGH | This will be needed in order for tutors to check how students are doing on courses and will also allow for tracking trends in what courses people are doing 

--- Non-functional requirements ---

No. | Features | Priority | Justification

1   | Website has a good response time | HIGH | If the website doesn’t feel responsive to users they will most likely go somewhere else

2   | Website is adaptable to any viewing device e.g. laptop, smart phone, tablet. | MEDIUM | Whilst it’s important to have the website accessible to people no matter the device, a majority of users will be using a computer or laptop and so those take priority.

3   | Colour scheme is appropriate for any user | HIGH | User accessibility is important and if some users can’t see the website properly they won’t use the service

4   | User login credentials and any other personal data is secure | HIGH | The user needs to be able to trust the service with the credentials or they just won’t use it.

5 | The system should be available at all times | HIGH | The website can lose a lot of traffic if it’s not available to everyone when they want it.




// prettier.config.js or .prettierrc.js
module.exports = {
    // 一行最多 100 字符
    printWidth: 120,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: false,
    // 使用单引号
    singleQuote: false,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: true,
    // 末尾不需要逗号
    trailingComma: 'none',
    // 大括号内的首尾需要空格
    bracketSpacing: false,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'lf'
};
