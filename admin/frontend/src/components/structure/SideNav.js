import React, { useContext, useEffect } from "react";
import $ from "jquery";
import { Component } from "react";
import { Link } from "react-router-dom";
import ReactStore from "ReactStore";
import { navActive } from "../App";

function SideNav(props) {

	const { actives, dispatch } = useContext(navActive);
	const { activeTab, url } = actives;

	useEffect(() => {
		// Toggle the side navigation
		$("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
			$("body").toggleClass("sidebar-toggled");
			$(".sidebar").toggleClass("toggled");
			if ($(".sidebar").hasClass("toggled")) {
				$(".sidebar .collapse").collapse("hide");
			}
		});
	
		// Close any open menu accordions when window is resized below 768px
		$(window).resize(function () {
			if ($(window).width() < 768) {
				$(".sidebar .collapse").collapse("hide");
			}
		});
	
		// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
		$("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (e) {
			if ($(window).width() > 768) {
				var e0 = e.originalEvent,
					delta = e0.wheelDelta || -e0.detail;
				this.scrollTop += (delta < 0 ? 1 : -1) * 30;
				e.preventDefault();
			}
		});
	
		// Scroll to top button appear
		$(document).on("scroll", function () {
			var scrollDistance = $(this).scrollTop();
			if (scrollDistance > 100) {
				$(".scroll-to-top").fadeIn();
			} else {
				$(".scroll-to-top").fadeOut();
			}
		});
	
		// Smooth scrolling using jQuery easing
		$(document).on("click", "a.scroll-to-top", function (e) {
			var $anchor = $(this);
			$("html, body")
				.stop()
				.animate(
					{
						scrollTop: $($anchor.attr("href")).offset().top,
					},
					1000,
					"easeInOutExpo"
				);
			e.preventDefault();
	
		});
		
		// 각 컴포넌트 Detail 주소들 매핑규칙
		let key = url.slice(url.lastIndexOf("/")+1, url.length);
		switch(key) {
			case "truckOwnerInfoDetail":
				key = "truckOwnerInfoList";
				break;
			case "carrierInfoDetail":
				key = "carrierInfoList";
				break;
		};
	
		// 계단 sideNav 활성화
		if(key !== '') {
			$(".forMobileMenu").each(function() {
				const tmp1 = $(this).children();
				for(var i = 0; i < tmp1.length; i++) {
					if(JSON.stringify(tmp1[i].href).includes(key)) {
						$(tmp1[i]).attr("class", $(tmp1[i]).attr("class") + " active");
						const tmp2 = $(this).parents("li").children();
						$(tmp2[0]).attr("class", "nav-link");
						$(tmp2[0]).attr("aria-expanded", "true");
						$(tmp2[0]).css("color", "#0061f2");
						$(tmp2[1]).attr("class", "collapse show");
					};
				};
			});
		};
	
		// 단일 sideNav 활성화
		$("li[class=nav-item]").each(function() {
			const targetMenu = $(this).children().attr("href");
			if(targetMenu !== undefined && targetMenu !== "#") {
				if(targetMenu.includes(key)) {
					$(this).find("span").css("color", "#0061f2");
				};
			};
		});

		// 새로 active 하기 전 active값들 초기화
		$("li[class=nav-item").on("click", function() {
			const obj = $(this)[0];
			var arr = new Array();
			$("li[class=nav-item").each(function() {
				if($(this)[0] != obj) {
					arr.push($(this));
				}
			})
	
			for(var i = 0; i < arr.length; i++) {
				$(arr[i][0].children[0]).css("color", "");
			}
		})

		return () => {
	
		}
	}, []);

	return (
		<ReactStore.Consumer>
			{(store) => (
				<ul className="navbar-nav bg-gradient-light sidebar sidebar-dark accordion" id="accordionSidebar">
					<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
						<div className="sidebar-brand-icon rotate-n-15">
							<i className="fas fa-truck-moving"></i>
						</div>
						<div className="sidebar-brand-text mx-1">
							용차블루 <sup>관리자1.0</sup>
						</div>
					</a>

					<li className="nav-item" id="button1">
						{/* <a
							className="nav-link collapsed"
							href="#"
							onClick={() => store.handleClick("button1")}
						> */}
							<Link className="nav-link collapsed" to="/dashboard/dashboard">
							<i className="fas fa-fw fa-chart-line"></i>
								<span>Dashboard</span>
							</Link>
						{/* </a> */}
					</li>

					<li className="nav-item" id="buttonn2">
						<a
							className="nav-link collapsed"
							href="#"
							data-toggle="collapse"
							data-target="#collapseTwo"
							aria-expanded="true"
							aria-controls="collapseTwo"
							// onClick={() => store.handleClick("buttonn2")}
						>
							<i className="fas fa-fw fa-krw"></i>
							<span>정산관리</span>
						</a>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
							<div className="bg-white py-2 collapse-inner rounded">
								<h6 className="collapse-header">정산관리</h6>

								<div className="forMobileMenu">
									<Link className="collapse-item" to="/calculate/transportList">
										운송료내역
										</Link>
									<Link className="collapse-item" to="/calculate/truckOwnerCalc">
										차주정산
										</Link>
								</div>
							</div>
						</div>
					</li>

					<li className="nav-item" id="button3">
						{/* <a
							className="nav-link collapsed"
							href="#"
							onClick={() => store.handleClick("button3")}
						> */}
							<Link className="nav-link collapsed" to="/carrier/carrierInfoList">
							<i className="fas fa-fw fa-chalkboard-teacher"></i>
								<span>운송사관리</span>
							</Link>
						{/* </a> */}
					</li>

					<li className="nav-item" id="button4">
						{/* <a
							className="nav-link collapsed"
							href="#"
							onClick={() => store.handleClick("button4")}
						> */}
							<Link className="nav-link collapsed" to="/truckOwner/truckOwnerInfoList">
							<i className="fas fa-fw fa-truck"></i>
								<span>차주관리</span>
							</Link>
						{/* </a> */}
					</li>

					<li className="nav-item" id="button5">
						<a
							className="nav-link collapsed"
							href="#"
							data-toggle="collapse"
							data-target="#collapseFive"
							aria-expanded="true"
							aria-controls="collapseFive"
							onClick={() => store.handleClick("button5")}
						>
							<i className="fas fa-fw fa-list-alt"></i>
							<span>게시판관리</span>
						</a>
						<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionSidebar">
							<div className="bg-white py-2 collapse-inner rounded">
								<h6 className="collapse-header">게시판관리</h6>
								<div className="forMobileMenu">
									<Link to="/board/orderBoard" className="collapse-item">
										오더게시판
									</Link>
								</div>
							</div>
						</div>
					</li>

					<li className="nav-item" id="button6">
						<a
							className="nav-link collapsed"
							href="#"
							data-toggle="collapse"
							data-target="#collapseSix"
							aria-expanded="true"
							aria-controls="collapseSix"
							onClick={() => store.handleClick("button6")}
						>
							<i className="fas fa-fw fa-user"></i>
							<span>계정관리</span>
						</a>
						<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionSidebar">
							<div className="bg-white py-2 collapse-inner rounded">
								<h6 className="collapse-header">계정관리</h6>

								<div className="forMobileMenu">
									<Link className="collapse-item" to="/account/carrierAccount">
										운송사계정
										</Link>
									<Link className="collapse-item" to="/account/truckOwnerAccount">
										차주계정
										</Link>
									<Link className="collapse-item" to="/account/adminAccount">
										관리자계정
										</Link>
								</div>
							</div>
						</div>
					</li>

					<li className="nav-item" id="button7">
						{/* <a
							className="nav-link collapsed"
							href="#"
							onClick={() => store.handleClick("button7")}
						> */}
							<Link className="nav-link collapsed" to="/customerCenter/csInfo">
							<i className="fab fa-fw fa-buffer"></i>
								<span>고객센터CS</span>
							</Link>
						{/* </a> */}
					</li>

					<li className="nav-item" id="button8">
						{/* <a
							className="nav-link collapsed"
							href="#"
							onClick={() => store.handleClick("button8")}
						> */}
							<Link className="nav-link collapsed" to="/notice/noticeList">
							<i className="fas fa-fw fa-bullhorn"></i>
								<span>공지사항</span>
							</Link>
						{/* </a> */}
					</li>

					<li className="nav-item" id="button9">
						{/* <a
							className="nav-link collapsed"
							href="#"
							onClick={() => store.handleClick("button9")}
						> */}
							<Link className="nav-link collapsed" to="/serviceTerms/serviceTerms">
							<i className="fas fa-fw fa-info"></i>
								<span>서비스 약관</span>
							</Link>
						{/* </a> */}
					</li>

					<hr className="sidebar-divider d-none d-md-block" />

					<div className="text-center d-none d-md-inline">
						<button className="rounded-circle border-0" id="sidebarToggle"></button>
					</div>
				</ul>
			)}
		</ReactStore.Consumer>
	);
};

export default SideNav;
