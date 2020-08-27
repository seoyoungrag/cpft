
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>TaxInvoice complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType name="TaxInvoice"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="InvoiceKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerParty" type="{http://ws.baroservice.com/}InvoiceParty" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeParty" type="{http://ws.baroservice.com/}InvoiceParty" minOccurs="0"/&gt;
 *         &lt;element name="BrokerParty" type="{http://ws.baroservice.com/}InvoiceParty" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeASPEmail" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="IssueDirection" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxInvoiceType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxCalcType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="PurposeType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="ModifyCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Kwon" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Ho" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SerialNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Cash" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ChkBill" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Note" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Credit" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="WriteDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="AmountTotal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxTotal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TotalAmount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark1" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark2" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark3" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxInvoiceTradeLineItems" type="{http://ws.baroservice.com/}ArrayOfTaxInvoiceTradeLineItem" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "TaxInvoice", propOrder = {
    "invoiceKey",
    "invoicerParty",
    "invoiceeParty",
    "brokerParty",
    "invoiceeASPEmail",
    "issueDirection",
    "taxInvoiceType",
    "taxType",
    "taxCalcType",
    "purposeType",
    "modifyCode",
    "kwon",
    "ho",
    "serialNum",
    "cash",
    "chkBill",
    "note",
    "credit",
    "writeDate",
    "amountTotal",
    "taxTotal",
    "totalAmount",
    "remark1",
    "remark2",
    "remark3",
    "taxInvoiceTradeLineItems"
})
public class TaxInvoice {

    @XmlElement(name = "InvoiceKey")
    protected String invoiceKey;
    @XmlElement(name = "InvoicerParty")
    protected InvoiceParty invoicerParty;
    @XmlElement(name = "InvoiceeParty")
    protected InvoiceParty invoiceeParty;
    @XmlElement(name = "BrokerParty")
    protected InvoiceParty brokerParty;
    @XmlElement(name = "InvoiceeASPEmail")
    protected String invoiceeASPEmail;
    @XmlElement(name = "IssueDirection")
    protected int issueDirection;
    @XmlElement(name = "TaxInvoiceType")
    protected int taxInvoiceType;
    @XmlElement(name = "TaxType")
    protected int taxType;
    @XmlElement(name = "TaxCalcType")
    protected int taxCalcType;
    @XmlElement(name = "PurposeType")
    protected int purposeType;
    @XmlElement(name = "ModifyCode")
    protected String modifyCode;
    @XmlElement(name = "Kwon")
    protected String kwon;
    @XmlElement(name = "Ho")
    protected String ho;
    @XmlElement(name = "SerialNum")
    protected String serialNum;
    @XmlElement(name = "Cash")
    protected String cash;
    @XmlElement(name = "ChkBill")
    protected String chkBill;
    @XmlElement(name = "Note")
    protected String note;
    @XmlElement(name = "Credit")
    protected String credit;
    @XmlElement(name = "WriteDate")
    protected String writeDate;
    @XmlElement(name = "AmountTotal")
    protected String amountTotal;
    @XmlElement(name = "TaxTotal")
    protected String taxTotal;
    @XmlElement(name = "TotalAmount")
    protected String totalAmount;
    @XmlElement(name = "Remark1")
    protected String remark1;
    @XmlElement(name = "Remark2")
    protected String remark2;
    @XmlElement(name = "Remark3")
    protected String remark3;
    @XmlElement(name = "TaxInvoiceTradeLineItems")
    protected ArrayOfTaxInvoiceTradeLineItem taxInvoiceTradeLineItems;

    /**
     * invoiceKey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceKey() {
        return invoiceKey;
    }

    /**
     * invoiceKey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceKey(String value) {
        this.invoiceKey = value;
    }

    /**
     * invoicerParty 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link InvoiceParty }
     *     
     */
    public InvoiceParty getInvoicerParty() {
        return invoicerParty;
    }

    /**
     * invoicerParty 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link InvoiceParty }
     *     
     */
    public void setInvoicerParty(InvoiceParty value) {
        this.invoicerParty = value;
    }

    /**
     * invoiceeParty 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link InvoiceParty }
     *     
     */
    public InvoiceParty getInvoiceeParty() {
        return invoiceeParty;
    }

    /**
     * invoiceeParty 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link InvoiceParty }
     *     
     */
    public void setInvoiceeParty(InvoiceParty value) {
        this.invoiceeParty = value;
    }

    /**
     * brokerParty 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link InvoiceParty }
     *     
     */
    public InvoiceParty getBrokerParty() {
        return brokerParty;
    }

    /**
     * brokerParty 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link InvoiceParty }
     *     
     */
    public void setBrokerParty(InvoiceParty value) {
        this.brokerParty = value;
    }

    /**
     * invoiceeASPEmail 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeASPEmail() {
        return invoiceeASPEmail;
    }

    /**
     * invoiceeASPEmail 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeASPEmail(String value) {
        this.invoiceeASPEmail = value;
    }

    /**
     * issueDirection 속성의 값을 가져옵니다.
     * 
     */
    public int getIssueDirection() {
        return issueDirection;
    }

    /**
     * issueDirection 속성의 값을 설정합니다.
     * 
     */
    public void setIssueDirection(int value) {
        this.issueDirection = value;
    }

    /**
     * taxInvoiceType 속성의 값을 가져옵니다.
     * 
     */
    public int getTaxInvoiceType() {
        return taxInvoiceType;
    }

    /**
     * taxInvoiceType 속성의 값을 설정합니다.
     * 
     */
    public void setTaxInvoiceType(int value) {
        this.taxInvoiceType = value;
    }

    /**
     * taxType 속성의 값을 가져옵니다.
     * 
     */
    public int getTaxType() {
        return taxType;
    }

    /**
     * taxType 속성의 값을 설정합니다.
     * 
     */
    public void setTaxType(int value) {
        this.taxType = value;
    }

    /**
     * taxCalcType 속성의 값을 가져옵니다.
     * 
     */
    public int getTaxCalcType() {
        return taxCalcType;
    }

    /**
     * taxCalcType 속성의 값을 설정합니다.
     * 
     */
    public void setTaxCalcType(int value) {
        this.taxCalcType = value;
    }

    /**
     * purposeType 속성의 값을 가져옵니다.
     * 
     */
    public int getPurposeType() {
        return purposeType;
    }

    /**
     * purposeType 속성의 값을 설정합니다.
     * 
     */
    public void setPurposeType(int value) {
        this.purposeType = value;
    }

    /**
     * modifyCode 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getModifyCode() {
        return modifyCode;
    }

    /**
     * modifyCode 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setModifyCode(String value) {
        this.modifyCode = value;
    }

    /**
     * kwon 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getKwon() {
        return kwon;
    }

    /**
     * kwon 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setKwon(String value) {
        this.kwon = value;
    }

    /**
     * ho 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHo() {
        return ho;
    }

    /**
     * ho 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHo(String value) {
        this.ho = value;
    }

    /**
     * serialNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSerialNum() {
        return serialNum;
    }

    /**
     * serialNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSerialNum(String value) {
        this.serialNum = value;
    }

    /**
     * cash 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCash() {
        return cash;
    }

    /**
     * cash 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCash(String value) {
        this.cash = value;
    }

    /**
     * chkBill 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getChkBill() {
        return chkBill;
    }

    /**
     * chkBill 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setChkBill(String value) {
        this.chkBill = value;
    }

    /**
     * note 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNote() {
        return note;
    }

    /**
     * note 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNote(String value) {
        this.note = value;
    }

    /**
     * credit 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCredit() {
        return credit;
    }

    /**
     * credit 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCredit(String value) {
        this.credit = value;
    }

    /**
     * writeDate 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getWriteDate() {
        return writeDate;
    }

    /**
     * writeDate 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setWriteDate(String value) {
        this.writeDate = value;
    }

    /**
     * amountTotal 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmountTotal() {
        return amountTotal;
    }

    /**
     * amountTotal 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmountTotal(String value) {
        this.amountTotal = value;
    }

    /**
     * taxTotal 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTaxTotal() {
        return taxTotal;
    }

    /**
     * taxTotal 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTaxTotal(String value) {
        this.taxTotal = value;
    }

    /**
     * totalAmount 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTotalAmount() {
        return totalAmount;
    }

    /**
     * totalAmount 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTotalAmount(String value) {
        this.totalAmount = value;
    }

    /**
     * remark1 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRemark1() {
        return remark1;
    }

    /**
     * remark1 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRemark1(String value) {
        this.remark1 = value;
    }

    /**
     * remark2 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRemark2() {
        return remark2;
    }

    /**
     * remark2 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRemark2(String value) {
        this.remark2 = value;
    }

    /**
     * remark3 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRemark3() {
        return remark3;
    }

    /**
     * remark3 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRemark3(String value) {
        this.remark3 = value;
    }

    /**
     * taxInvoiceTradeLineItems 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfTaxInvoiceTradeLineItem }
     *     
     */
    public ArrayOfTaxInvoiceTradeLineItem getTaxInvoiceTradeLineItems() {
        return taxInvoiceTradeLineItems;
    }

    /**
     * taxInvoiceTradeLineItems 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfTaxInvoiceTradeLineItem }
     *     
     */
    public void setTaxInvoiceTradeLineItems(ArrayOfTaxInvoiceTradeLineItem value) {
        this.taxInvoiceTradeLineItems = value;
    }

}
