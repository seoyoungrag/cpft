
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>EDoc complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="EDoc"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="InvoiceKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="MgtKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="FormKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UserID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoicerParty" type="{http://ws.baroservice.com/}EDocParty" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceeParty" type="{http://ws.baroservice.com/}EDocParty" minOccurs="0"/&gt;
 *         &lt;element name="EDocInvoiceType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="CertYN" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="AutoAcceptYN" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="BusinessLicenseYN" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="BankBookYN" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="WriteDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="PurposeType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="AmountTotal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxTotal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TotalAmount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark1" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark2" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark3" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SerialNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="EDocProperties" type="{http://ws.baroservice.com/}ArrayOfEDocProperty" minOccurs="0"/&gt;
 *         &lt;element name="EDocTradeLineItems" type="{http://ws.baroservice.com/}ArrayOfEDocTradeLineItem" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "EDoc", propOrder = {
    "invoiceKey",
    "invoiceNum",
    "mgtKey",
    "formKey",
    "userID",
    "invoicerParty",
    "invoiceeParty",
    "eDocInvoiceType",
    "certYN",
    "autoAcceptYN",
    "businessLicenseYN",
    "bankBookYN",
    "writeDate",
    "taxType",
    "purposeType",
    "amountTotal",
    "taxTotal",
    "totalAmount",
    "remark1",
    "remark2",
    "remark3",
    "serialNum",
    "eDocProperties",
    "eDocTradeLineItems"
})
public class EDoc {

    @XmlElement(name = "InvoiceKey")
    protected String invoiceKey;
    @XmlElement(name = "InvoiceNum")
    protected String invoiceNum;
    @XmlElement(name = "MgtKey")
    protected String mgtKey;
    @XmlElement(name = "FormKey")
    protected String formKey;
    @XmlElement(name = "UserID")
    protected String userID;
    @XmlElement(name = "InvoicerParty")
    protected EDocParty invoicerParty;
    @XmlElement(name = "InvoiceeParty")
    protected EDocParty invoiceeParty;
    @XmlElement(name = "EDocInvoiceType")
    protected int eDocInvoiceType;
    @XmlElement(name = "CertYN")
    protected boolean certYN;
    @XmlElement(name = "AutoAcceptYN")
    protected boolean autoAcceptYN;
    @XmlElement(name = "BusinessLicenseYN")
    protected boolean businessLicenseYN;
    @XmlElement(name = "BankBookYN")
    protected boolean bankBookYN;
    @XmlElement(name = "WriteDate")
    protected String writeDate;
    @XmlElement(name = "TaxType")
    protected int taxType;
    @XmlElement(name = "PurposeType", required = true, type = Integer.class, nillable = true)
    protected Integer purposeType;
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
    @XmlElement(name = "SerialNum")
    protected String serialNum;
    @XmlElement(name = "EDocProperties")
    protected ArrayOfEDocProperty eDocProperties;
    @XmlElement(name = "EDocTradeLineItems")
    protected ArrayOfEDocTradeLineItem eDocTradeLineItems;

    /**
     * invoiceKey �Ӽ��� ���� �����ɴϴ�.
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
     * invoiceKey �Ӽ��� ���� �����մϴ�.
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
     * invoiceNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceNum() {
        return invoiceNum;
    }

    /**
     * invoiceNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceNum(String value) {
        this.invoiceNum = value;
    }

    /**
     * mgtKey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMgtKey() {
        return mgtKey;
    }

    /**
     * mgtKey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMgtKey(String value) {
        this.mgtKey = value;
    }

    /**
     * formKey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFormKey() {
        return formKey;
    }

    /**
     * formKey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFormKey(String value) {
        this.formKey = value;
    }

    /**
     * userID �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUserID() {
        return userID;
    }

    /**
     * userID �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUserID(String value) {
        this.userID = value;
    }

    /**
     * invoicerParty �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link EDocParty }
     *     
     */
    public EDocParty getInvoicerParty() {
        return invoicerParty;
    }

    /**
     * invoicerParty �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link EDocParty }
     *     
     */
    public void setInvoicerParty(EDocParty value) {
        this.invoicerParty = value;
    }

    /**
     * invoiceeParty �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link EDocParty }
     *     
     */
    public EDocParty getInvoiceeParty() {
        return invoiceeParty;
    }

    /**
     * invoiceeParty �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link EDocParty }
     *     
     */
    public void setInvoiceeParty(EDocParty value) {
        this.invoiceeParty = value;
    }

    /**
     * eDocInvoiceType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getEDocInvoiceType() {
        return eDocInvoiceType;
    }

    /**
     * eDocInvoiceType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setEDocInvoiceType(int value) {
        this.eDocInvoiceType = value;
    }

    /**
     * certYN �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isCertYN() {
        return certYN;
    }

    /**
     * certYN �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setCertYN(boolean value) {
        this.certYN = value;
    }

    /**
     * autoAcceptYN �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isAutoAcceptYN() {
        return autoAcceptYN;
    }

    /**
     * autoAcceptYN �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setAutoAcceptYN(boolean value) {
        this.autoAcceptYN = value;
    }

    /**
     * businessLicenseYN �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isBusinessLicenseYN() {
        return businessLicenseYN;
    }

    /**
     * businessLicenseYN �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setBusinessLicenseYN(boolean value) {
        this.businessLicenseYN = value;
    }

    /**
     * bankBookYN �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isBankBookYN() {
        return bankBookYN;
    }

    /**
     * bankBookYN �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setBankBookYN(boolean value) {
        this.bankBookYN = value;
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
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getPurposeType() {
        return purposeType;
    }

    /**
     * purposeType �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setPurposeType(Integer value) {
        this.purposeType = value;
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
     * serialNum �Ӽ��� ���� �����ɴϴ�.
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
     * serialNum �Ӽ��� ���� �����մϴ�.
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
     * eDocProperties �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfEDocProperty }
     *     
     */
    public ArrayOfEDocProperty getEDocProperties() {
        return eDocProperties;
    }

    /**
     * eDocProperties �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfEDocProperty }
     *     
     */
    public void setEDocProperties(ArrayOfEDocProperty value) {
        this.eDocProperties = value;
    }

    /**
     * eDocTradeLineItems �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfEDocTradeLineItem }
     *     
     */
    public ArrayOfEDocTradeLineItem getEDocTradeLineItems() {
        return eDocTradeLineItems;
    }

    /**
     * eDocTradeLineItems �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfEDocTradeLineItem }
     *     
     */
    public void setEDocTradeLineItems(ArrayOfEDocTradeLineItem value) {
        this.eDocTradeLineItems = value;
    }

}
