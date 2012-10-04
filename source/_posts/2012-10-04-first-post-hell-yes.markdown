---
layout: post
title: "First post with Octopress"
date: 2012-10-04 15:47
comments: true
categories:
---
{% codeblock language: SQL lang:sql %}
SELECT s.school_name, t.teacher_name
FROM school s
INNER JOIN schoolteacher st on s.id = st.school_id
INNER JOIN teacher t on st.id = st.teacher_id

{% endcodeblock %}


{% codeblock language: CoffeeScript lang:coffeescript %}
hello_world ()->
    "Hello, world!"
{% endcodeblock %}


{% codeblock language: JavaScript lang:javascript %}
function hello_wold() {
    return "Hello, world!";
}
{% endcodeblock %}



{% codeblock language: Python lang:python %}
def hello_world():
    return "Hello, world!"
{% endcodeblock %}
