---
layout: post
title: "Neo4j Cypher"
date: 2012-10-05 09:49
comments: true
published: true
categories: 
---

I had a look at Neo4j a while back.  The thought of graph databases was very
interesting.  You can have some really elegant solutions to complex problems
modeled with graphs.

Recently I wen’t to a Neo4j hack day.  Peter Neubauer was there helping us out
with a quick Cypher overview.  My eyes lit up as soon as I saw how you can
construct queries with Cypher.

SQL is great for relational data.  With Cypher, the queries model a graph
structure.



               (A)        (E)

             /     \    /

         (B)   --   (C)  -- (G)

                   /   \

                 (D)    (F)


    //This Cypher query selects all nodes that are related to C

    START c=node(c)
    MATCH n-[r]-c
    RETURN n, c


     n |  c
     ------
     B |  C
     A |  C
     E |  C
     D |  C
     F |  C
     G |  C

     //This Cypher query selects all nodes that are related to C and are not
     //related to B

     START c=node(c), b=node(b)
     MATCH n-[r]-c
     WHERE not(n-->b)
     RETURN n, c

     n |  c
     ------
     B |  C
     E |  C
     D |  C
     F |  C
     G |  C



