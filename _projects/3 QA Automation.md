---
name: QA Automation
tools: [Selenium, Python, TestCafe, JS, HTML, DevOps, Technical Writing, and more]
image: https://images.prismic.io/hatica/67c538b9-b30f-4bf9-bfe7-8a265581a393_Jenkins+Jira+Integration.png?auto=compress,format&rect=0,0,1800,1151&w=1200&h=767
description: NDA-compliant talk about my skills as a QA Automation Engineer.
---

# My job as a QA Automation Engineer

Supporting roles like QA and DevOps are the unsung heroes of developing. Our tasks are the grease that makes the machine run smoothly, in the form of scripts and managing internal platforms, processes and documentation. Unfortunately, this, coupled with NDA agreements, means there's no easy way to showcase our hard work to other people.

However, here I will explain what I've worked on.

{% include about/skills.html title="My tasks" source=site.data.qa-skills %}

## The QA Automation project

I joined the QA team of NPAW, a streaming analysis service, as their first Automation dev.

Until then, the team had only worked manually- and although they dabbled in automation, they did not have resources to dedicate themselves enough to it. 

So after learning the ins and outs of the platform and webapp, I took the scattered **javascript TestCafé** functional and visual tests they had coded, and organized them into a project.

The first automation target was the **Regression plan.** We already had a detailed plan to follow manually before each major update, so following it to automate repetitive and time-consuming yet stable tests was straight-forward.

As this testing suite was implemented, verified tests were added to a **Jenkins** pipeline that was set to run daily. Aside of the full suite report, each test had an associated **Jira** ticket, that could automatically be flagged as failed.

When it was nearly finished, a member of the Customer Support team transferred to QA as the second automation dev. I became *de facto* their senior in automation- I trained and helped them go through the ropes of the project and the usage of TestCafé- something that the **internal documentation** I wrote along the way helped greatly with.

The second target was **Visual testing.** After working with my teammate on the base tests a former manual QA had coded, we reached the conclusion that TestCafé did not have the necessary features we needed...

So we decided to **migrate the project to Python Selenium.**

After building a base and the scripts that would check screenshots against each other, I entrusted the Visual testing suite to my teammate.

Meanwhile, I focused on migrating the Regression plan to Selenium. Our CEO encouraged us to use the company's *ChatGPT* account to work more efficiently, but I had limited success with translating TestCafé to Selenium- it seems like it didn't have much training on TestCafé.

When the migration was complete, a new junior member joined the company. They split their time between Automatic and Manual testing. I trained them in using UI-based test scripting tools like Selenium IDE, and we worked together in **API testing.**

With two members in the Automation team, and the regression plan migrated and operative, my tasks shifted to a **DevOps focus.** I took charge of creating, maintaining and improving the **Jenkins** pipelines that would automatically run our testing suites after each push to the PROD and QA branches.

I also collaborated with the dev team to automate the **deployment processes** to different testing environments, and to add testing-friendly tags to the HTML of the website.
