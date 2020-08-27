
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>SimpleTaxInvoiceEx complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType name="SimpleTaxInvoiceEx"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="NTSSendKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSSendDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="IssueDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="WriteDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ModifyCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="PurposeType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="InvoicerCorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerTaxRegID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerCorpName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerCEOName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerAddr" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerBizType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerBizClass" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerContactName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerEmail" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeCorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeTaxRegID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeCorpName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeCEOName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeAddr" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeBizType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeBizClass" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeContactName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeEmail" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerCorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerTaxRegID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerCorpName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerCEOName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerAddr" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerBizType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerBizClass" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerContactName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BrokerEmail" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="AmountTotal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxTotal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TotalAmount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Cash" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ChkBill" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Note" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Credit" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark1" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark2" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark3" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ItemName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxRegID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CEOName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SimpleTaxInvoiceEx", propOrder = {
    "ntsSendKey",
    "ntsSendDT",
    "issueDT",
    "writeDate",
    "modifyCode",
    "taxType",
    "purposeType",
    "invoicerCorpNum",
    "invoicerTaxRegID",
    "invoicerCorpName",
    "invoicerCEOName",
    "invoicerAddr",
    "invoicerBizType",
    "invoicerBizClass",
    "invoicerContactName",
    "invoicerEmail",
    "invoiceeCorpNum",
    "invoiceeTaxRegID",
    "invoiceeCorpName",
    "invoiceeCEOName",
    "invoiceeAddr",
    "invoiceeBizType",
    "invoiceeBizClass",
    "invoiceeContactName",
    "invoiceeEmail",
    "brokerCorpNum",
    "brokerTaxRegID",
    "brokerCorpName",
    "brokerCEOName",
    "brokerAddr",
    "brokerBizType",
    "brokerBizClass",
    "brokerContactName",
    "brokerEmail",
    "amountTotal",
    "taxTotal",
    "totalAmount",
    "cash",
    "chkBill",
    "note",
    "credit",
    "remark1",
    "remark2",
    "remark3",
    "itemName",
    "corpNum",
    "taxRegID",
    "corpName",
    "ceoName"
})
public class SimpleTaxInvoiceEx {

    @XmlElement(name = "NTSSendKey")
    protected String ntsSendKey;
    @XmlElement(name = "NTSSendDT")
    protected String ntsSendDT;
    @XmlElement(name = "IssueDT")
    protected String issueDT;
    @XmlElement(name = "WriteDate")
    protected String writeDate;
    @XmlElement(name = "ModifyCode")
    protected String modifyCode;
    @XmlElement(name = "TaxType")
    protected int taxType;
    @XmlElement(name = "PurposeType")
    protected int purposeType;
    @XmlElement(name = "InvoicerCorpNum")
    protected String invoicerCorpNum;
    @XmlElement(name = "InvoicerTaxRegID")
    protected String invoicerTaxRegID;
    @XmlElement(name = "InvoicerCorpName")
    protected String invoicerCorpName;
    @XmlElement(name = "InvoicerCEOName")
    protected String invoicerCEOName;
    @XmlElement(name = "InvoicerAddr")
    protected String invoicerAddr;
    @XmlElement(name = "InvoicerBizType")
    protected String invoicerBizType;
    @XmlElement(name = "InvoicerBizClass")
    protected String invoicerBizClass;
    @XmlElement(name = "InvoicerContactName")
    protected String invoicerContactName;
    @XmlElement(name = "InvoicerEmail")
    protected String invoicerEmail;
    @XmlElement(name = "InvoiceeCorpNum")
    protected String invoiceeCorpNum;
    @XmlElement(name = "InvoiceeTaxRegID")
    protected String invoiceeTaxRegID;
    @XmlElement(name = "InvoiceeCorpName")
    protected String invoiceeCorpName;
    @XmlElement(name = "InvoiceeCEOName")
    protected String invoiceeCEOName;
    @XmlElement(name = "InvoiceeAddr")
    protected String invoiceeAddr;
    @XmlElement(name = "InvoiceeBizType")
    protected String invoiceeBizType;
    @XmlElement(name = "InvoiceeBizClass")
    protected String invoiceeBizClass;
    @XmlElement(name = "InvoiceeContactName")
    protected String invoiceeContactName;
    @XmlElement(name = "InvoiceeEmail")
    protected String invoiceeEmail;
    @XmlElement(name = "BrokerCorpNum")
    protected String brokerCorpNum;
    @XmlElement(name = "BrokerTaxRegID")
    protected String brokerTaxRegID;
    @XmlElement(name = "BrokerCorpName")
    protected String brokerCorpName;
    @XmlElement(name = "BrokerCEOName")
    protected String brokerCEOName;
    @XmlElement(name = "BrokerAddr")
    protected String brokerAddr;
    @XmlElement(name = "BrokerBizType")
    protected String brokerBizType;
    @XmlElement(name = "BrokerBizClass")
    protected String brokerBizClass;
    @XmlElement(name = "BrokerContactName")
    protected String brokerContactName;
    @XmlElement(name = "BrokerEmail")
    protected String brokerEmail;
    @XmlElement(name = "AmountTotal")
    protected String amountTotal;
    @XmlElement(name = "TaxTotal")
    protected String taxTotal;
    @XmlElement(name = "TotalAmount")
    protected String totalAmount;
    @XmlElement(name = "Cash")
    protected String cash;
    @XmlElement(name = "ChkBill")
    protected String chkBill;
    @XmlElement(name = "Note")
    protected String note;
    @XmlElement(name = "Credit")
    protected String credit;
    @XmlElement(name = "Remark1")
    protected String remark1;
    @XmlElement(name = "Remark2")
    protected String remark2;
    @XmlElement(name = "Remark3")
    protected String remark3;
    @XmlElement(name = "ItemName")
    protected String itemName;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "TaxRegID")
    protected String taxRegID;
    @XmlElement(name = "CorpName")
    protected String corpName;
    @XmlElement(name = "CEOName")
    protected String ceoName;

    /**
     * ntsSendKey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSSendKey() {
        return ntsSendKey;
    }

    /**
     * ntsSendKey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSSendKey(String value) {
        this.ntsSendKey = value;
    }

    /**
     * ntsSendDT 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSSendDT() {
        return ntsSendDT;
    }

    /**
     * ntsSendDT 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSSendDT(String value) {
        this.ntsSendDT = value;
    }

    /**
     * issueDT 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIssueDT() {
        return issueDT;
    }

    /**
     * issueDT 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIssueDT(String value) {
        this.issueDT = value;
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
     * invoicerCorpNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerCorpNum() {
        return invoicerCorpNum;
    }

    /**
     * invoicerCorpNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerCorpNum(String value) {
        this.invoicerCorpNum = value;
    }

    /**
     * invoicerTaxRegID 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerTaxRegID() {
        return invoicerTaxRegID;
    }

    /**
     * invoicerTaxRegID 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerTaxRegID(String value) {
        this.invoicerTaxRegID = value;
    }

    /**
     * invoicerCorpName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerCorpName() {
        return invoicerCorpName;
    }

    /**
     * invoicerCorpName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerCorpName(String value) {
        this.invoicerCorpName = value;
    }

    /**
     * invoicerCEOName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerCEOName() {
        return invoicerCEOName;
    }

    /**
     * invoicerCEOName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerCEOName(String value) {
        this.invoicerCEOName = value;
    }

    /**
     * invoicerAddr 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerAddr() {
        return invoicerAddr;
    }

    /**
     * invoicerAddr 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerAddr(String value) {
        this.invoicerAddr = value;
    }

    /**
     * invoicerBizType 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerBizType() {
        return invoicerBizType;
    }

    /**
     * invoicerBizType 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerBizType(String value) {
        this.invoicerBizType = value;
    }

    /**
     * invoicerBizClass 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerBizClass() {
        return invoicerBizClass;
    }

    /**
     * invoicerBizClass 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerBizClass(String value) {
        this.invoicerBizClass = value;
    }

    /**
     * invoicerContactName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerContactName() {
        return invoicerContactName;
    }

    /**
     * invoicerContactName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerContactName(String value) {
        this.invoicerContactName = value;
    }

    /**
     * invoicerEmail 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoicerEmail() {
        return invoicerEmail;
    }

    /**
     * invoicerEmail 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoicerEmail(String value) {
        this.invoicerEmail = value;
    }

    /**
     * invoiceeCorpNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeCorpNum() {
        return invoiceeCorpNum;
    }

    /**
     * invoiceeCorpNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeCorpNum(String value) {
        this.invoiceeCorpNum = value;
    }

    /**
     * invoiceeTaxRegID 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeTaxRegID() {
        return invoiceeTaxRegID;
    }

    /**
     * invoiceeTaxRegID 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeTaxRegID(String value) {
        this.invoiceeTaxRegID = value;
    }

    /**
     * invoiceeCorpName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeCorpName() {
        return invoiceeCorpName;
    }

    /**
     * invoiceeCorpName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeCorpName(String value) {
        this.invoiceeCorpName = value;
    }

    /**
     * invoiceeCEOName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeCEOName() {
        return invoiceeCEOName;
    }

    /**
     * invoiceeCEOName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeCEOName(String value) {
        this.invoiceeCEOName = value;
    }

    /**
     * invoiceeAddr 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeAddr() {
        return invoiceeAddr;
    }

    /**
     * invoiceeAddr 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeAddr(String value) {
        this.invoiceeAddr = value;
    }

    /**
     * invoiceeBizType 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeBizType() {
        return invoiceeBizType;
    }

    /**
     * invoiceeBizType 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeBizType(String value) {
        this.invoiceeBizType = value;
    }

    /**
     * invoiceeBizClass 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeBizClass() {
        return invoiceeBizClass;
    }

    /**
     * invoiceeBizClass 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeBizClass(String value) {
        this.invoiceeBizClass = value;
    }

    /**
     * invoiceeContactName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeContactName() {
        return invoiceeContactName;
    }

    /**
     * invoiceeContactName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeContactName(String value) {
        this.invoiceeContactName = value;
    }

    /**
     * invoiceeEmail 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceeEmail() {
        return invoiceeEmail;
    }

    /**
     * invoiceeEmail 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceeEmail(String value) {
        this.invoiceeEmail = value;
    }

    /**
     * brokerCorpNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerCorpNum() {
        return brokerCorpNum;
    }

    /**
     * brokerCorpNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerCorpNum(String value) {
        this.brokerCorpNum = value;
    }

    /**
     * brokerTaxRegID 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerTaxRegID() {
        return brokerTaxRegID;
    }

    /**
     * brokerTaxRegID 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerTaxRegID(String value) {
        this.brokerTaxRegID = value;
    }

    /**
     * brokerCorpName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerCorpName() {
        return brokerCorpName;
    }

    /**
     * brokerCorpName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerCorpName(String value) {
        this.brokerCorpName = value;
    }

    /**
     * brokerCEOName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerCEOName() {
        return brokerCEOName;
    }

    /**
     * brokerCEOName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerCEOName(String value) {
        this.brokerCEOName = value;
    }

    /**
     * brokerAddr 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerAddr() {
        return brokerAddr;
    }

    /**
     * brokerAddr 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerAddr(String value) {
        this.brokerAddr = value;
    }

    /**
     * brokerBizType 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerBizType() {
        return brokerBizType;
    }

    /**
     * brokerBizType 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerBizType(String value) {
        this.brokerBizType = value;
    }

    /**
     * brokerBizClass 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerBizClass() {
        return brokerBizClass;
    }

    /**
     * brokerBizClass 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerBizClass(String value) {
        this.brokerBizClass = value;
    }

    /**
     * brokerContactName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerContactName() {
        return brokerContactName;
    }

    /**
     * brokerContactName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerContactName(String value) {
        this.brokerContactName = value;
    }

    /**
     * brokerEmail 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrokerEmail() {
        return brokerEmail;
    }

    /**
     * brokerEmail 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrokerEmail(String value) {
        this.brokerEmail = value;
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
     * itemName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getItemName() {
        return itemName;
    }

    /**
     * itemName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setItemName(String value) {
        this.itemName = value;
    }

    /**
     * corpNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorpNum() {
        return corpNum;
    }

    /**
     * corpNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorpNum(String value) {
        this.corpNum = value;
    }

    /**
     * taxRegID 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTaxRegID() {
        return taxRegID;
    }

    /**
     * taxRegID 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTaxRegID(String value) {
        this.taxRegID = value;
    }

    /**
     * corpName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorpName() {
        return corpName;
    }

    /**
     * corpName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorpName(String value) {
        this.corpName = value;
    }

    /**
     * ceoName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCEOName() {
        return ceoName;
    }

    /**
     * ceoName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCEOName(String value) {
        this.ceoName = value;
    }

}
