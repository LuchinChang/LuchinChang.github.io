---
layout: distill
title: ReLyMe
description: A method that incorporates music theory into data-driven music generation models
img: assets/img/ReLyMe_icon.png
importance: 1
category: CS

authors:
  - name: LC Chang
    url: "https://luchinchang.github.io/"
    affiliations:
      name: None

toc:
  - name: Introduction
  - name: Music Theory
  - name: Method
  - name: Demo
    # subsections:
    #   - name: Example Child Subsection 1

demoId: HbDs_FsLnTA
---
Authors of the paper: Zhang, Chen and Chang, Luchin and Wu, Songruoyao and Tan, Xu and Qin, Tao and Liu, Tie-Yan and Zhang, Kejun

## Introduction

Lyric-to-melody generation, which generates melody according to given lyrics, is one of the most important automatic music composition tasks. With the rapid development of deep learning, previous works address this task with end-to-end neural network models. However, deep learning models cannot well capture the strict but subtle relationships between lyrics and melodies, which compromises the harmony between lyrics and generated melodies. In this paper, we propose ReLyMe, a method that incorporates <u>Re</u>lationships between <u>Ly</u>rics and <u>Me</u>lodies from music theory to ensure the harmony between lyrics and melodies.

In summary, the main contributions of this work are as follows:
- We formulate the relationships between lyrics and melodies from three aspects (tone, rhythm, and structure) based on the music theory summarized by musicians.
- We propose ReLyMe, a method that exploits lyric-melody relationships during the decoding process of neural lyricto-melody generation systems to ensure harmony between generated melodies and corresponding lyrics.
- We conduct experiments on both English and Chinese song datasets and evaluate the generated melodies with objective and subjective evaluation. The results demonstrate the effectiveness of ReLyMe in guaranteeing the harmony between lyrics and melodies and show the significance of incorporating lyric-melody relationships into lyric-to-melody generation.

## Music Theory

## Method

## Demo

{% include youtubePlayer.html id=page.demoId class="rounded"%}
