// date에 new Date 형식의 값을 넣으면 yyyy-MM-dd 형태로 반환해줌
export const getDateStr = (date) => {
	return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
};

// 일주일 전
export const getLastWeek = () => {
	$("#fromDate").datepicker("setDate", "-7D");
	$("#toDate").datepicker("setDate", "today");
};
// 1달 전
export const getLastMonth = () => {
	$("#fromDate").datepicker("setDate", "-1M");
	$("#toDate").datepicker("setDate", "toDay");
};
// 3달 전
export const getLast3Month = () => {
	$("#fromDate").datepicker("setDate", "-3M");
	$("#toDate").datepicker("setDate", "toDay");
};
// 6달 전
export const getLast6Month = () => {
	$("#fromDate").datepicker("setDate", "-6M");
	$("#toDate").datepicker("setDate", "toDay");
};
