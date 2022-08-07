---
slug: /
image: /img/ogp.png
sidebar_label: 이 책의 개요
---

# 시작하기에 앞서

<!-- # はじめに -->

<head>
  <title>TypeScript입문 "서바이벌TypeScript" 한국어판 : 실무에서 사용한다면, 최소한 이 만큼은 알아 두자!</title>
</head>

[<head> <title>typescript入門『サバイバルtypescript』〜実務で使うなら最低限ここだけはおさえておきたいこと〜</title> </head>]: #

<!-- markdownlint-disable MD033 -->

<ul>
  <li>
    원문(日文) : <iframe src="https://ghbtns.com/github-btn.html?user=yytypescript&repo=book&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="서바이벌TypeScript 원본 Repository"></iframe>
  </li>
  <li>
    한국어판 : <iframe src="https://ghbtns.com/github-btn.html?user=BB-choi&repo=yytypescript-book&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="서바이벌TypeScript 한국어판 Repository"></iframe>
  </li>
</ul>

<!-- markdownlint-restore -->

## 이 책은 어떤 책인가요?

<!-- ## これはどのような本か？ -->

이 책의 목표는 독자가 TypeScript를 곧바로 실무에서 이용할 수 있도록, 가장 빠른 길로 독자를 인도하는 것입니다. 이 책은 TypeScript를 총망라한 문서는 아니므로 실무에서 그다지 사용되지 않는 TypeScript의 기능은 다루지 않습니다. 이 책은 다루는 내용을 '자주 사용되는 기능'으로 줄이고 줄여 "실무에서 TypeScript를 사용한다면, 이 만큼은 알아두자", "이 정도 알아둔다면, 실무에서 살아남을 수 있다(=서바이벌 할 수 있다)"라는 관점에서 집필 중인 책입니다.

<!-- 本書の目標は、本読者がTypeScriptをすぐに実務で利用できるよう、最短ルートに読者を導く一冊になることです。本書は、TypeScriptの網羅的なドキュメントではありません。逆に、実務であまり使わないTypeScriptの機能は割愛します。扱う内容は、頻出する機能にしぼりにしぼって、「実務でTypeScriptを使うなら、ここだけはおさえておこう」「ここだけはおさえておけば、実務で死なない(=サバイバルできる)」という観点で執筆しています。 -->

이 책은 TypeScript를 중심으로 다루고 있지만, 실무상 필요한 지식으로서 JavaScript의 구조나 프론트엔드 프레임워크인 React등에 대해서도 다룹니다.

<!-- 本書はTypeScriptを中心に扱いますが、実務上、必要になる知識としてJavaScriptの仕様、フロントエンドフレームワークのReactなどについても扱います。 -->

## 이 책의 한국어판에 대하여

서바이벌 TypeScript 한국어판은 [サバイバルtypescript](https://typescriptbook.jp/)를 한국어로 번역하고 있는 책입니다. 현재 [원본 GitHub 리포지터리](https://github.com/yytypescript/book)의 `2022-07-29` 커밋([`45ed3df`](https://github.com/yytypescript/book/commit/45ed3df1d105bc7efbfa985a840c46b961f74738))을 기준으로 번역을 진행하고 있습니다.

## 누구를 대상으로 쓰여진 책인가요?

<!-- ## 誰に向けて書かれた本か？ -->

이 책은 프로그래밍 경험은 있지만 이제 TypeScript를 시작하려는 사람, 혹은 막 시작한 사람을 대상으로 합니다. 예를 들어, 다음과 같은 프로그래머들입니다.

<!-- 本書は、プログラミング経験はあるが、これからTypeScriptをはじめる人、もしくは、始めたばかりという人を対象にしています。たとえば、次のような属性のプログラマを想定しています。 -->

1. 주로 서버사이드 프로그래밍(PHP, Ruby, Java 등)을 하고 있지만, 프론트엔드도 담당하게 되었다.
2. JavaScript 경험은 있지만, JavaScript에 정통하지는 않아 TypeScript와 병행 학습하고 싶다.
3. Ruby나 Python등의 동적타이핑(Dynamic typing) 언어를 주로 다뤄왔고, Type을 신경써서 다루지 않았기 때문에 Type 시스템에 대해 배울 필요를 느끼고 있다.

<!-- 1. 主としてサーバーサイドのプログラミング(PHPやRuby、Javaなど)をしているが、フロントエンドも担当することになった。
2. JavaScriptの経験があるが、そこまでJavaScriptに精通しているわけではないので、TypeScriptと並行して勉強したい。
3. RubyやPythonなどの動的型付け言語を主に扱ってきており、型をそこまで意識してこなかったので、型システムについて学ぶ必要性を感じている。 -->

## 이 책에서 다루지 않는 것

<!-- ## 本書では扱わないこと -->

이 책은 TypeScript 초보자지만, 프로그래밍 경험 자체는 가지고 있는 사람을 대상 독자로 하고 있습니다. 때문에, "변수란 무엇인가?", "함수란 무엇인가?"와 같은 프로그래밍 기초는 이 책에서 다루지 않습니다.

<!-- 本書は、TypeScript初心者であるものの、プログラミング経験自体はある人を対象読者としています。そのため、「変数とは何か？」「関数とは何か？」といったプログラミングのいろはは本書では扱いません。 -->

## 이 책의 구성

<!-- ## 本書の構成 -->

제2장 "TypeScript 개요"에서는, TypeScript의 개요를 다룸과 동시에, TypeScript의 장점과 TypeScript가 JavaScript 생태계에서 어떤 위치에 있는지 나타내 봄으로써, 전체를 그릴 수 있게 됩니다. TypeScript란 무엇인가를 상세히 알게 되거나, 독저가 동료나 소속한 팀에게 TypeScript를 PR할 수 있을 정도의 정보를 제공합니다. TypeScript의 역사, 사상, 철학에 대한 배움을 통하여 TypeScript가 어떤 점에서 진가를 발휘하는지 학습합니다. TypeScript를 왜 사용해야 하는가? TypeScript의 이점은 무엇인가? TypeScript와 JavaScript는 어떤 관계인가?와 같은 의문에 대해 답을 얻어 갈 수 있습니다.

<!-- 第2章「TypeScriptのあらまし」では、TypeScriptの概要について触れます。同時に、TypeScriptの良さや、TypeScriptがJavaScriptエコシステムでどういった立ち位置にあるのかを示すことで、全体像を知っていただきます。TypeScriptとは何なのか詳しく知ってもらったり、読者が同僚や属するチームにTypeScriptをPRできるような情報を提供します。TypeScriptの歴史、思想、哲学を知ってもらうことで、どのようなところでTypeScriptがその本領を発揮するのかを学びます。TypeScriptをなぜ使うべきなのか？TypeScriptのアドバンテージは何なのか？TypeScriptとJavaScriptはどのような関係なのか？といった疑問に答えていきます。 -->

제3장 "제3장 만들어보며 배우는 TypeScript"에서는, 다양한 애플리케이션을 TypeScript로 구현하는 워크숍 형식의 설명을 통해, TypeScript 그 자체에 대해서는 가볍게 배우면서, TypeScript를 사용한 개발 흐름을 느껴 보실 수 있습니다. 이 워크숍에서는 실무 개발에 조금 더 가까워 질 수 있도록, TypeScript뿐만 아니라 프론트엔드 프레임워크인 React, 테스트 프레임워크인 Jest, REST API에 의한 CRUD 조작이나 WebSocket을 사용한 백엔드 통신에 대해서도 다룹니다. 이 장에서는 TypeScript의 기능이나 작성 방법에 대해서는 최소한으로 설명하고, 상세한 TypeScript의 기능 설명은 제4장에서 다룰 것입니다.

<!-- 第3章「作って学ぶTypeScript」では、さまざまなアプリケーションをTypeScriptで実装するワークショップ形式の解説を通じて、TypeScriptそのものについては軽めに学びながら、TypeScriptを用いた開発の流れを感じ取って頂きます。このワークショップでは、実務の開発により近づけるよう、TypeScriptだけでなく、フロントエンドフレームワークのReact、テストフレームワークのJest、REST APIによるCRUD操作やWebSocketを使ったバックエンドとの通信についても扱って行きます。本章でもTypeScriptの機能や書き方について必要最低限説明しますが、詳しい言語機能の説明は第4章で扱います。 -->

제4장 "제4장 읽어보며 배우는TypeScript"에서는, TypeScript의 기능을 하나하나 설명할 것입니다. 모든 기능의 레퍼런스라기보다는, 실제 개발에서 빈번하게 사용하는 것으로 한정하여 '이것만은 알아두어야 할 기능'을 중심으로 다룰 것입니다. TypeScript 학습자는 JavaScript도 병행하여 학습하는 경우가 많으므로 JavaScript에 대한 설명도 섞어가며 설명할 것입니다.

<!-- 第4章「読んで学ぶTypeScript」では、TypeScriptの言語機能をひとつひとつ解説します。すべての機能のリファレンスというよりは、実際の開発で頻繁に使用するものに限定し、これだけはおさえておきたい機能を中心に取り上げていきます。TypeScript学習者はJavaScriptも並行して学習することが多いので、JavaScriptについての説明も織り交ぜながら解説します。 -->

제5장 "Tips"에서는, JavaScript나 TypeScript에서 자주 사용되는 코딩 테크닉을 소개할 것입니다.

<!-- 第5章「Tips」では、JavaScriptやTypeScriptでよく使われるコーディングテクニックを紹介します。 -->

## 이 책을 사용하는 방법

<!-- ## 本書の使い方 -->

이 책은 기본적으로 목차 순으로 읽어나가면 좋습니다.

<!-- 本書は基本的に、章立ての順番とおりに読み進めて頂いて問題ありません。 -->

이 책의 큰 흐름은 응용편의 애플리케이션 개발(제3장)이, 기초편인 TypeScript의 기능(제4장)보다 앞서있지만, 이것에는 실제 적용을 해 보며 학습하는 것이 학습 효율을 높여준다는 경험 법칙에 기초하고 있습니다.

<!-- 本書の大まかな流れとして、応用編であるアプリ開発(第3章)のほうが、基礎編であるTypeScriptの言語機能(第4章)より先んじていますが、これには実践を通じて学んだほうが学習効率がいいという経験則に基づいています。 -->

의도적으로 응용편을 먼저 설명하고 있으므로, TypeScript를 처음 접하는 독자라도 기초편(제4장)을 먼저 읽지 않아도 제3장부터 진행할 수 있도록 충분히 배려하고 있습니다.

<!-- 意図的に応用編を先に解説しているので、TypeScriptに初めて触れる読者でも、基礎編(第4章)を先に読まなくても、第3章から読み進められるように十分配慮しています。 -->

## 집필자에 대하여

<!-- ## 執筆者について -->

이 책은 주로 [YYTypeScript](https://yyts.connpass.com/)의 참가자를 중심으로 한 다수의 뜻있는 프로그래머가 모여서 집필하고 있습니다. 집필은 오픈소스 형태로 이루어지고 있으며, 이 책은 GitHub에도 공개되어있어 집필 참가도 수시로 접수받고 있습니다. 집필에 관심있는 분은 집필자 대상 정보 페이지를 확인해 주세요.

<!-- 本書は、主に[YYTypeScript](https://yyts.connpass.com/)の参加者を中心とした複数の有志のプログラマが集って執筆を行っています。執筆はいわばオープンソース的に行われており、本書はGitHubでも公開されていて、執筆への参加も随時受け付けています。執筆に興味がある方は、執筆者向け情報ページをご覧ください。 -->

### Contributor

<!-- ### コントリビューター -->

이 책의 기획, 집필, 편집 등에 참가하신 분들을 규칙없이, 경칭을 생략하여 소개합니다.

<!-- 本書の企画、執筆、編集等に携わった方々を順不同敬称略で紹介します。 -->

- reoring
- suin
- nouphet
- クロレ
- jamashita
- fuubit
- t-yng
- kakiuchi
- philomagi
- mikkame
- NkawaK
- zima
- tatsuki_sun
- 建築のジョー
- ないとう
- takezoux2
- \_rena_h

## 계속적 업데이트

<!-- ## 継続的アップデート -->

이 책은 계속적으로 업데이트 되고 있습니다.

<!-- 本書は継続的にアップデートされていきます。 -->
