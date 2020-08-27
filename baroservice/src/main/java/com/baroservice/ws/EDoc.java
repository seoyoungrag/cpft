
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>EDoc complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
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
     * invoiceNum 속성의 값을 가져옵니다.
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
     * invoiceNum 속성의 값을 설정합니다.
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
     * mgtKey 속성의 값을 가져옵니다.
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
     * mgtKey 속성의 값을 설정합니다.
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
     * formKey 속성의 값을 가져옵니다.
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
     * formKey 속성의 값을 설정합니다.
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
     * userID 속성의 값을 가져옵니다.
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
     * userID 속성의 값을 설정합니다.
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
     * invoicerParty 속성의 값을 가져옵니다.
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
     * invoicerParty 속성의 값을 설정합니다.
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
     * invoiceeParty 속성의 값을 가져옵니다.
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
     * invoiceeParty 속성의 값을 설정합니다.
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
     * eDocInvoiceType 속성의 값을 가져옵니다.
     * 
     */
    public int getEDocInvoiceType() {
        return eDocInvoiceType;
    }

    /**
     * eDocInvoiceType 속성의 값을 설정합니다.
     * 
     */
    public void setEDocInvoiceType(int value) {
        this.eDocInvoiceType = value;
    }

    /**
     * certYN 속성의 값을 가져옵니다.
     * 
     */
    public boolean isCertYN() {
        return certYN;
    }

    /**
     * certYN 속성의 값을 설정합니다.
     * 
     */
    public void setCertYN(boolean value) {
        this.certYN = value;
    }

    /**
     * autoAcceptYN 속성의 값을 가져옵니다.
     * 
     */
    public boolean isAutoAcceptYN() {
        return autoAcceptYN;
    }

    /**
     * autoAcceptYN 속성의 값을 설정합니다.
     * 
     */
    public void setAutoAcceptYN(boolean value) {
        this.autoAcceptYN = value;
    }

    /**
     * businessLicenseYN 속성의 값을 가져옵니다.
     * 
     */
    public boolean isBusinessLicenseYN() {
        return businessLicenseYN;
    }

    /**
     * businessLicenseYN 속성의 값을 설정합니다.
     * 
     */
    public void setBusinessLicenseYN(boolean value) {
        this.businessLicenseYN = value;
    }

    /**
     * bankBookYN 속성의 값을 가져옵니다.
     * 
     */
    public boolean isBankBookYN() {
        return bankBookYN;
    }

    /**
     * bankBookYN 속성의 값을 설정합니다.
     * 
     */
    public void setBankBookYN(boolean value) {
        this.bankBookYN = value;
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
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getPurposeType() {
        return purposeType;
    }

    /**
     * purposeType 속성의 값을 설정합니다.
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
     * eDocProperties 속성의 값을 가져옵니다.
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
     * eDocProperties 속성의 값을 설정합니다.
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
     * eDocTradeLineItems 속성의 값을 가져옵니다.
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
     * eDocTradeLineItems 속성의 값을 설정합니다.
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
