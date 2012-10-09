---
layout: post
title: "Django password reset"
date: 2012-10-09 14:29
comments: true
categories: 
---

I keep forgetting my password on the systems I am working on.  Today I switched
gears to a Django project where the DB is using Postgres.  I thought the right
way was to just go into the DB, find my username, and then change the password
from there.  Well, it turns out the right way is actually to do it straight
from Django (thank you Django).



    >>> python manage.py shell
    ## Use Django Shell to pull in all settings to your session

    >>> from django.contrib.auth.models import User
    >>> vijay = User.objects.get(username__exact='vijay')
    >>> vijay.set_password('my new password')
    >>> vijay.save()

