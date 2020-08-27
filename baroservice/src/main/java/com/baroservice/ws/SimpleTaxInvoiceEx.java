
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>SimpleTaxInvoiceEx complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
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
     * ntsSendKey �Ӽ��� ���� �����ɴϴ�.
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
     * ntsSendKey �Ӽ��� ���� �����մϴ�.
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
     * ntsSendDT �Ӽ��� ���� �����ɴϴ�.
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
     * ntsSendDT �Ӽ��� ���� �����մϴ�.
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
     * issueDT �Ӽ��� ���� �����ɴϴ�.
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
     * issueDT �Ӽ��� ���� �����մϴ�.
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
     * writeDate �Ӽ��� ���� �����ɴϴ�.
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
     * writeDate �Ӽ��� ���� �����մϴ�.
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
     * modifyCode �Ӽ��� ���� �����ɴϴ�.
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
     * modifyCode �Ӽ��� ���� �����մϴ�.
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
     * taxType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getTaxType() {
        return taxType;
    }

    /**
     * taxType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setTaxType(int value) {
        this.taxType = value;
    }

    /**
     * purposeType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getPurposeType() {
        return purposeType;
    }

    /**
     * purposeType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setPurposeType(int value) {
        this.purposeType = value;
    }

    /**
     * invoicerCorpNum �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerCorpNum �Ӽ��� ���� �����մϴ�.
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
     * invoicerTaxRegID �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerTaxRegID �Ӽ��� ���� �����մϴ�.
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
     * invoicerCorpName �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerCorpName �Ӽ��� ���� �����մϴ�.
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
     * invoicerCEOName �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerCEOName �Ӽ��� ���� �����մϴ�.
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
     * invoicerAddr �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerAddr �Ӽ��� ���� �����մϴ�.
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
     * invoicerBizType �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerBizType �Ӽ��� ���� �����մϴ�.
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
     * invoicerBizClass �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerBizClass �Ӽ��� ���� �����մϴ�.
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
     * invoicerContactName �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerContactName �Ӽ��� ���� �����մϴ�.
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
     * invoicerEmail �Ӽ��� ���� �����ɴϴ�.
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
     * invoicerEmail �Ӽ��� ���� �����մϴ�.
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
     * invoiceeCorpNum �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeCorpNum �Ӽ��� ���� �����մϴ�.
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
     * invoiceeTaxRegID �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeTaxRegID �Ӽ��� ���� �����մϴ�.
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
     * invoiceeCorpName �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeCorpName �Ӽ��� ���� �����մϴ�.
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
     * invoiceeCEOName �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeCEOName �Ӽ��� ���� �����մϴ�.
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
     * invoiceeAddr �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeAddr �Ӽ��� ���� �����մϴ�.
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
     * invoiceeBizType �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeBizType �Ӽ��� ���� �����մϴ�.
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
     * invoiceeBizClass �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeBizClass �Ӽ��� ���� �����մϴ�.
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
     * invoiceeContactName �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeContactName �Ӽ��� ���� �����մϴ�.
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
     * invoiceeEmail �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceeEmail �Ӽ��� ���� �����մϴ�.
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
     * brokerCorpNum �Ӽ��� ���� �����ɴϴ�.
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
     * brokerCorpNum �Ӽ��� ���� �����մϴ�.
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
     * brokerTaxRegID �Ӽ��� ���� �����ɴϴ�.
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
     * brokerTaxRegID �Ӽ��� ���� �����մϴ�.
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
     * brokerCorpName �Ӽ��� ���� �����ɴϴ�.
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
     * brokerCorpName �Ӽ��� ���� �����մϴ�.
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
     * brokerCEOName �Ӽ��� ���� �����ɴϴ�.
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
     * brokerCEOName �Ӽ��� ���� �����մϴ�.
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
     * brokerAddr �Ӽ��� ���� �����ɴϴ�.
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
     * brokerAddr �Ӽ��� ���� �����մϴ�.
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
     * brokerBizType �Ӽ��� ���� �����ɴϴ�.
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
     * brokerBizType �Ӽ��� ���� �����մϴ�.
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
     * brokerBizClass �Ӽ��� ���� �����ɴϴ�.
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
     * brokerBizClass �Ӽ��� ���� �����մϴ�.
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
     * brokerContactName �Ӽ��� ���� �����ɴϴ�.
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
     * brokerContactName �Ӽ��� ���� �����մϴ�.
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
     * brokerEmail �Ӽ��� ���� �����ɴϴ�.
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
     * brokerEmail �Ӽ��� ���� �����մϴ�.
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
     * amountTotal �Ӽ��� ���� �����ɴϴ�.
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
     * amountTotal �Ӽ��� ���� �����մϴ�.
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
     * taxTotal �Ӽ��� ���� �����ɴϴ�.
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
     * taxTotal �Ӽ��� ���� �����մϴ�.
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
     * totalAmount �Ӽ��� ���� �����ɴϴ�.
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
     * totalAmount �Ӽ��� ���� �����մϴ�.
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
     * cash �Ӽ��� ���� �����ɴϴ�.
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
     * cash �Ӽ��� ���� �����մϴ�.
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
     * chkBill �Ӽ��� ���� �����ɴϴ�.
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
     * chkBill �Ӽ��� ���� �����մϴ�.
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
     * note �Ӽ��� ���� �����ɴϴ�.
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
     * note �Ӽ��� ���� �����մϴ�.
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
     * credit �Ӽ��� ���� �����ɴϴ�.
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
     * credit �Ӽ��� ���� �����մϴ�.
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
     * remark1 �Ӽ��� ���� �����ɴϴ�.
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
     * remark1 �Ӽ��� ���� �����մϴ�.
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
     * remark2 �Ӽ��� ���� �����ɴϴ�.
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
     * remark2 �Ӽ��� ���� �����մϴ�.
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
     * remark3 �Ӽ��� ���� �����ɴϴ�.
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
     * remark3 �Ӽ��� ���� �����մϴ�.
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
     * itemName �Ӽ��� ���� �����ɴϴ�.
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
     * itemName �Ӽ��� ���� �����մϴ�.
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
     * corpNum �Ӽ��� ���� �����ɴϴ�.
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
     * corpNum �Ӽ��� ���� �����մϴ�.
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
     * taxRegID �Ӽ��� ���� �����ɴϴ�.
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
     * taxRegID �Ӽ��� ���� �����մϴ�.
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
     * corpName �Ӽ��� ���� �����ɴϴ�.
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
     * corpName �Ӽ��� ���� �����մϴ�.
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
     * ceoName �Ӽ��� ���� �����ɴϴ�.
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
     * ceoName �Ӽ��� ���� �����մϴ�.
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
