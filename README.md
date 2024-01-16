# Angular Interactive Credit Card
![project_final](https://github.com/DrainGK/angular_interactive_card/assets/25454614/4f7d1ca0-9ad6-4d3c-b0c1-3333a90a0c3c)

# The Challenge:

The objective is to create an interactive credit card detail form. 
The information entered in the form should be updated and displayed on the credit card in real-time. 
Additionally, the form should effectively handle errors when the inputs are in an incorrect format

# How I have done it:

For this challenge, I've chosen to use Angular and Angular Material. 
The decision is straightforward: I need to enhance my Angular skills for work. 
My initial expertise lies in ReactJS and NextJS, but recent projects have been utilizing Angular.

As a result, the approach I'm taking is slightly different.

I had to carefully consider which components to use, as well as the services that could be implemented within them. 
The overall structure in Angular differs from that in React, necessitating a more thoughtful planning process

![schema](https://github.com/DrainGK/angular_interactive_card/assets/25454614/cf9f2e1f-6a1b-4009-995c-cb7557b8f40f)

"In this project, surprisingly, there isn't a direct use of services for two-way data binding. 
Initially, I considered using the directive [(ngModel)] or passing props from the inputs to the cards. 
However, I soon realized that the components are siblings, not parent-child, which was a new insight for me.

Consequently, I should have used a third party, in this case, a 'shared' service, to facilitate information sharing between the card components. 
This approach reminded me of a similar implementation I had done in ReactJS using the Zustand store.

![Shared_service](https://github.com/DrainGK/angular_interactive_card/assets/25454614/05570cd7-af8d-46a9-a6bc-1cead87b30e0)

The rest of the functions involve logical aspects that require practice and research through resources like Stack Overflow, YouTube, ChatGPT, and Copilot. 
Identifying problems and knowing what to do comes with years of experience, which I am actively working on.

The second challenge involved Angular Material, and I'm learning new things about it every day. 
The reason for choosing Angular Material is the same as for Angular—it's what I'm using at work, and I need to become proficient with it.

One significant hurdle was error handling, which took days to resolve. 
I tried several solutions, but encountered a persistent issue: the card number input was not validating correctly. 
The issue was not with the format—the 4 digits were correct, there were no alphabetic characters, and space handling seemed fine. 
Eventually, I realized the problem was the spaces. In the form control, I initially used a regex for 'numbers only', which didn't allow spaces. 
The solution was to switch to a previously created 'cardNumberValidator' which addressed this issue.

![validators](https://github.com/DrainGK/angular_interactive_card/assets/25454614/17549ed7-6961-4e15-827b-64b0ed9f0a4c)
