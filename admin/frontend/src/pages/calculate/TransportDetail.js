import React, { useEffect, useState, useCallback } from "react";
import MainStructure from "components/structure/MainStructure";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";

function TransportDetail(props) {

    console.log("component did mount");
   
    // 컴포넌트 마운트, 언마운트시 실행
    useEffect(() => {
        console.log("컴포넌트 마운트");
        setData(userSeq-1);
        return () => {
            console.log("컴포넌트 언마운트");
        }
    }, []);
    
    const userSeq = props.location.state.userSeq;
    const [ inputs, setInputs ] = useState({
    	carrierNm: "-",
    	workGroupNm: "-",
    	workType: "-",
    	carrierCalcStatus: "-",
    	carrierCalcEndDate: "-",
    	platformCalcStatus: "-",
    	carrierPayment: "-",
    	platformPayment: "-"
    });

    const { carrierNm, workGroupNm, workType, carrierCalcStatus, carrierCalcEndDate, platformCalcStatus, carrierPayment, platformPayment } = inputs;

    
    const DataTable_language = {
        decimal: ",",
        thousands: ".",
        paginate: {
         first: "",
         last: "",
         previous: "<",
         next: ">",
        },
        processing: "처리 중 입니다.",
        emptyTable: "처리할 내용이 없습니다.",
        info: "총 _PAGES_페이지/_TOTAL_개 중 (_START_ ~ _END_) ",
    };
    
    useEffect(() => {
        attachJiraIssueColletor();
            // Activate Bootstrap scrollspy for the sticky nav component
        $("body").scrollspy({
            target: "#stickyNav",
            offset: 0,
        });
        // Scrolls to an offset anchor when a sticky nav link is clicked
        $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
            $("html, body").animate(
            {
            scrollTop: target.offset().top - 81,
            },
            200
            );
            return false;
            }
        }
        });


        $("#TransportDetailTbl").DataTable({
            //language: DataTable_language,
            serverSide: false,
            processing: true,
            responsice: true,
            autoWidth: false,
            width: "100%",
            ordering: false,
            select: false,
            dom:
             "<'row'<'col-sm-12'rt>>" +
             "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
//            ajax: {
//                url: "/v1/user/accountList/ROLE_TRUCKOWNER",
//                type: "GET",
//                data: { length: 100 }, 
//                dataSrc: function(res) {
//                    var data  = res.data;
//                    console.log(data);
//                    return data;
//                }
//            },
            columnDefs: [
                {
                 defaultContent: "-",
                 targets: "_all",
                },
                {
                    targets: [0],
                    createdCell: function(td, cellData, rowData, row, col) {
                        $(td).text(row+1);
                    }
                }
            ],
            data : array,
            columns : [
            	{ data: null, width: "5%" },
                { data: "truckOwnerNm", width: "8%" },
                { data: "truckOwnerCode", width: "10%" },
                { data: "transportCode", width: "15%" },
                { data: "shippingCharge", width: "15%" },
                { data: "shippingServiceCharge", width: "15%" },
                { data: "totalPayment", width: "15%" }
            ],

            createdRow: function(row, data) {
                $(row).attr("id", data.userSeq);
            },

            initComplete: function(settings, json) {
            
            }
        });
        return () => {
            console.log("component unmount");
            $("#TransportDetailTbl").DataTable().destroy(true);
        }
    }, []);

 // 더미 데이터 세팅 ----------------------------------------------------------
    
    

    const array = [
        {
            "truckOwnerNm": "김차주",
            "truckOwnerCode": "N0002643",
            "transportCode": "W00001",
            "shippingCharge": "3,000,000",
            "shippingServiceCharge": "100,000",
            "totalPayment": "7,000,000",
        },
        {
            "truckOwnerNm": "김차주",
            "truckOwnerCode": "N0002643",
            "transportCode": "W00001",
            "shippingCharge": "3,000,000",
            "shippingServiceCharge": "100,000",
            "totalPayment": "7,000,000",
        },
        {
            "truckOwnerNm": "양차주",
            "truckOwnerCode": "N0002643",
            "transportCode": "W00001",
            "shippingCharge": "3,000,000",
            "shippingServiceCharge": "100,000",
            "totalPayment": "7,000,000",
        },
        {
            "truckOwnerNm": "서차주",
            "truckOwnerCode": "N0002643",
            "transportCode": "W00001",
            "shippingCharge": "3,000,000",
            "shippingServiceCharge": "100,000",
            "totalPayment": "7,000,000",
        },
        {
            "truckOwnerNm": "최차주",
            "truckOwnerCode": "N0002643",
            "transportCode": "W00001",
            "shippingCharge": "3,000,000",
            "shippingServiceCharge": "100,000",
            "totalPayment": "7,000,000",
        },
        {
            "truckOwnerNm": "유차주",
            "truckOwnerCode": "N0002643",
            "transportCode": "W00001",
            "shippingCharge": "3,000,000",
            "shippingServiceCharge": "100,000",
            "totalPayment": "7,000,000",
        }
    ];
    //--------------------------------------------
    
    
    const listArrayData = [
        {
            "carrierNm": "(주)팀프레시",
            "workGroupNm": "TS1",
            "workType": "고정",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/03",
            "platformCalcStatus": "진행중",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        },
        {
        	"carrierNm": "(주)팀프레시",
            "workGroupNm": "TS2",
            "workType": "단기",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/04",
            "platformCalcStatus": "진행중",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        },
        {
        	"carrierNm": "(주)팀프레시",
            "workGroupNm": "TS3",
            "workType": "고정",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/09",
            "platformCalcStatus": "완료",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        },
        {
        	"carrierNm": "(주)팀프레시",
            "workGroupNm": "LF1",
            "workType": "단기",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/22",
            "platformCalcStatus": "진행중",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        },
        {
        	"carrierNm": "(주)팀프레시",
            "workGroupNm": "LF2",
            "workType": "단기",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/28",
            "platformCalcStatus": "완료",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        }
    ];
    
    // 더미 데이터 세팅
    
    const setData = useCallback(userSeq => {
        setInputs(prevInputs => ({
            ...prevInputs,
            carrierNm: listArrayData[userSeq].carrierNm,
            workGroupNm: listArrayData[userSeq].workGroupNm,
            workType: listArrayData[userSeq].workType,
            carrierCalcStatus: listArrayData[userSeq].carrierCalcStatus,
            carrierCalcEndDate: listArrayData[userSeq].carrierCalcEndDate,
            platformCalcStatus: listArrayData[userSeq].platformCalcStatus,
            carrierPayment: listArrayData[userSeq].carrierPayment,
            platformPayment: listArrayData[userSeq].platformPayment
        }));
    }, []);
    
  return (
   <MainStructure>
    <main>
     <div className="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
      <div className="container-fluid">
       <div className="page-header-content">
        <h1 className="page-header-title">
         <div className="page-header-icon">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="feather feather-edit-3"
          >
           <path d="M12 20h9"></path>
           <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
         </div>
         <span>팀프레시 운송료 내역</span>
        </h1>
       </div>
      </div>
     </div>

     
     
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
        <div className="card-body">
        <table className="table col-12">
            <tbody className="col-12">
            <tr>
                <td>운송그룹</td>
                <td>업무형태</td>
                <td>정산마감 일시</td>
                <td>운송사 정산상태</td>
                <td>플랫폼 정산상태</td>
            </tr>
            <tr>
            	<td> <span id="workGroupNm"><b>{workGroupNm}</b></span></td>
            	<td> <span id="workType"><b>{workType}</b></span></td>
            	<td> <span id="carrierCalcEndDate"><b>{carrierCalcEndDate}</b></span></td>
            	<td> <span id="carrierCalcStatus"><b>{carrierCalcStatus}</b></span></td>
            	<td> <span id="platformCalcStatus"><b>{platformCalcStatus}</b></span></td>
            </tr>
            </tbody>
        </table>            
        </div>
       <div className="card-header row">
       		<div className="col-4 d-flex justify-content-start">
	       <input
	        className="form-control datepicker col-4"
	        id="date"
	        type="text"
	        placeholder="2020-08"
	       />
	       <button className="btn btn-info ml-5">조회</button>
	      </div>
       </div>
       <div className="card-body">
        <div className="datatable table-responsive">
         <table
          id="TransportDetailTbl"
          className="table table-bordered table-hover"
          width="100%"
          cellSpacing="0"
          role="grid"
          aria-describedby="dataTable_info"
         >
             <thead>
                <tr>
                    <th>no</th>
                    <th>차주명</th>
                    <th>차주코드</th>
                    <th>운송카드코드</th>
                    <th>지급 운송료</th>
                    <th>운송 상품 사용 내역</th>
                    <th>최종 지출 금액</th>
                </tr>
             </thead>
             <tr>
                <td>합계</td>
                <td></td>
                <td></td>
                <td></td>
                <td>18,000,000</td>
                <td>700,000</td>
                <td>420,000,000</td>
             </tr> 
        </table>
        </div>
       </div>
      </div>
     </div>
    </main>
   </MainStructure>
  )
 }
export default TransportDetail;