// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34661){
var map__34662 = p__34661;
var map__34662__$1 = ((((!((map__34662 == null)))?(((((map__34662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34662):map__34662);
var m = map__34662__$1;
var n = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34664_34686 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34665_34687 = null;
var count__34666_34688 = (0);
var i__34667_34689 = (0);
while(true){
if((i__34667_34689 < count__34666_34688)){
var f_34690 = cljs.core._nth.call(null,chunk__34665_34687,i__34667_34689);
cljs.core.println.call(null,"  ",f_34690);


var G__34691 = seq__34664_34686;
var G__34692 = chunk__34665_34687;
var G__34693 = count__34666_34688;
var G__34694 = (i__34667_34689 + (1));
seq__34664_34686 = G__34691;
chunk__34665_34687 = G__34692;
count__34666_34688 = G__34693;
i__34667_34689 = G__34694;
continue;
} else {
var temp__5457__auto___34695 = cljs.core.seq.call(null,seq__34664_34686);
if(temp__5457__auto___34695){
var seq__34664_34696__$1 = temp__5457__auto___34695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34664_34696__$1)){
var c__4319__auto___34697 = cljs.core.chunk_first.call(null,seq__34664_34696__$1);
var G__34698 = cljs.core.chunk_rest.call(null,seq__34664_34696__$1);
var G__34699 = c__4319__auto___34697;
var G__34700 = cljs.core.count.call(null,c__4319__auto___34697);
var G__34701 = (0);
seq__34664_34686 = G__34698;
chunk__34665_34687 = G__34699;
count__34666_34688 = G__34700;
i__34667_34689 = G__34701;
continue;
} else {
var f_34702 = cljs.core.first.call(null,seq__34664_34696__$1);
cljs.core.println.call(null,"  ",f_34702);


var G__34703 = cljs.core.next.call(null,seq__34664_34696__$1);
var G__34704 = null;
var G__34705 = (0);
var G__34706 = (0);
seq__34664_34686 = G__34703;
chunk__34665_34687 = G__34704;
count__34666_34688 = G__34705;
i__34667_34689 = G__34706;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34707 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34707);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34707)))?cljs.core.second.call(null,arglists_34707):arglists_34707));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34668_34708 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34669_34709 = null;
var count__34670_34710 = (0);
var i__34671_34711 = (0);
while(true){
if((i__34671_34711 < count__34670_34710)){
var vec__34672_34712 = cljs.core._nth.call(null,chunk__34669_34709,i__34671_34711);
var name_34713 = cljs.core.nth.call(null,vec__34672_34712,(0),null);
var map__34675_34714 = cljs.core.nth.call(null,vec__34672_34712,(1),null);
var map__34675_34715__$1 = ((((!((map__34675_34714 == null)))?(((((map__34675_34714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34675_34714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34675_34714):map__34675_34714);
var doc_34716 = cljs.core.get.call(null,map__34675_34715__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34717 = cljs.core.get.call(null,map__34675_34715__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34713);

cljs.core.println.call(null," ",arglists_34717);

if(cljs.core.truth_(doc_34716)){
cljs.core.println.call(null," ",doc_34716);
} else {
}


var G__34718 = seq__34668_34708;
var G__34719 = chunk__34669_34709;
var G__34720 = count__34670_34710;
var G__34721 = (i__34671_34711 + (1));
seq__34668_34708 = G__34718;
chunk__34669_34709 = G__34719;
count__34670_34710 = G__34720;
i__34671_34711 = G__34721;
continue;
} else {
var temp__5457__auto___34722 = cljs.core.seq.call(null,seq__34668_34708);
if(temp__5457__auto___34722){
var seq__34668_34723__$1 = temp__5457__auto___34722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34668_34723__$1)){
var c__4319__auto___34724 = cljs.core.chunk_first.call(null,seq__34668_34723__$1);
var G__34725 = cljs.core.chunk_rest.call(null,seq__34668_34723__$1);
var G__34726 = c__4319__auto___34724;
var G__34727 = cljs.core.count.call(null,c__4319__auto___34724);
var G__34728 = (0);
seq__34668_34708 = G__34725;
chunk__34669_34709 = G__34726;
count__34670_34710 = G__34727;
i__34671_34711 = G__34728;
continue;
} else {
var vec__34677_34729 = cljs.core.first.call(null,seq__34668_34723__$1);
var name_34730 = cljs.core.nth.call(null,vec__34677_34729,(0),null);
var map__34680_34731 = cljs.core.nth.call(null,vec__34677_34729,(1),null);
var map__34680_34732__$1 = ((((!((map__34680_34731 == null)))?(((((map__34680_34731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34680_34731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34680_34731):map__34680_34731);
var doc_34733 = cljs.core.get.call(null,map__34680_34732__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34734 = cljs.core.get.call(null,map__34680_34732__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34730);

cljs.core.println.call(null," ",arglists_34734);

if(cljs.core.truth_(doc_34733)){
cljs.core.println.call(null," ",doc_34733);
} else {
}


var G__34735 = cljs.core.next.call(null,seq__34668_34723__$1);
var G__34736 = null;
var G__34737 = (0);
var G__34738 = (0);
seq__34668_34708 = G__34735;
chunk__34669_34709 = G__34736;
count__34670_34710 = G__34737;
i__34671_34711 = G__34738;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__34682 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34683 = null;
var count__34684 = (0);
var i__34685 = (0);
while(true){
if((i__34685 < count__34684)){
var role = cljs.core._nth.call(null,chunk__34683,i__34685);
var temp__5457__auto___34739__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34739__$1)){
var spec_34740 = temp__5457__auto___34739__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34740));
} else {
}


var G__34741 = seq__34682;
var G__34742 = chunk__34683;
var G__34743 = count__34684;
var G__34744 = (i__34685 + (1));
seq__34682 = G__34741;
chunk__34683 = G__34742;
count__34684 = G__34743;
i__34685 = G__34744;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__34682);
if(temp__5457__auto____$1){
var seq__34682__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34682__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34682__$1);
var G__34745 = cljs.core.chunk_rest.call(null,seq__34682__$1);
var G__34746 = c__4319__auto__;
var G__34747 = cljs.core.count.call(null,c__4319__auto__);
var G__34748 = (0);
seq__34682 = G__34745;
chunk__34683 = G__34746;
count__34684 = G__34747;
i__34685 = G__34748;
continue;
} else {
var role = cljs.core.first.call(null,seq__34682__$1);
var temp__5457__auto___34749__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34749__$2)){
var spec_34750 = temp__5457__auto___34749__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34750));
} else {
}


var G__34751 = cljs.core.next.call(null,seq__34682__$1);
var G__34752 = null;
var G__34753 = (0);
var G__34754 = (0);
seq__34682 = G__34751;
chunk__34683 = G__34752;
count__34684 = G__34753;
i__34685 = G__34754;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
