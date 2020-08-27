
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>CashBill complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="CashBill"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="InvoiceKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="MgtKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSConfirmNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="FranchiseCorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="FranchiseMemberID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="FranchiseCorpName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="FranchiseCEOName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="FranchiseAddr" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="FranchiseTel" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="IdentityNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ItemName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="HP" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Fax" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Email" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TradeDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TradeType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TradeUsage" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TradeMethod" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Amount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Tax" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ServiceCharge" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CancelType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CancelNTSConfirmNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CancelNTSConfirmDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CashBill", propOrder = {
    "invoiceKey",
    "mgtKey",
    "ntsConfirmNum",
    "franchiseCorpNum",
    "franchiseMemberID",
    "franchiseCorpName",
    "franchiseCEOName",
    "franchiseAddr",
    "franchiseTel",
    "identityNum",
    "itemName",
    "hp",
    "fax",
    "email",
    "tradeDate",
    "tradeType",
    "tradeUsage",
    "tradeMethod",
    "amount",
    "tax",
    "serviceCharge",
    "cancelType",
    "cancelNTSConfirmNum",
    "cancelNTSConfirmDate"
})
public class CashBill {

    @XmlElement(name = "InvoiceKey")
    protected String invoiceKey;
    @XmlElement(name = "MgtKey")
    protected String mgtKey;
    @XmlElement(name = "NTSConfirmNum")
    protected String ntsConfirmNum;
    @XmlElement(name = "FranchiseCorpNum")
    protected String franchiseCorpNum;
    @XmlElement(name = "FranchiseMemberID")
    protected String franchiseMemberID;
    @XmlElement(name = "FranchiseCorpName")
    protected String franchiseCorpName;
    @XmlElement(name = "FranchiseCEOName")
    protected String franchiseCEOName;
    @XmlElement(name = "FranchiseAddr")
    protected String franchiseAddr;
    @XmlElement(name = "FranchiseTel")
    protected String franchiseTel;
    @XmlElement(name = "IdentityNum")
    protected String identityNum;
    @XmlElement(name = "ItemName")
    protected String itemName;
    @XmlElement(name = "HP")
    protected String hp;
    @XmlElement(name = "Fax")
    protected String fax;
    @XmlElement(name = "Email")
    protected String email;
    @XmlElement(name = "TradeDate")
    protected String tradeDate;
    @XmlElement(name = "TradeType")
    protected String tradeType;
    @XmlElement(name = "TradeUsage")
    protected String tradeUsage;
    @XmlElement(name = "TradeMethod")
    protected String tradeMethod;
    @XmlElement(name = "Amount")
    protected String amount;
    @XmlElement(name = "Tax")
    protected String tax;
    @XmlElement(name = "ServiceCharge")
    protected String serviceCharge;
    @XmlElement(name = "CancelType")
    protected String cancelType;
    @XmlElement(name = "CancelNTSConfirmNum")
    protected String cancelNTSConfirmNum;
    @XmlElement(name = "CancelNTSConfirmDate")
    protected String cancelNTSConfirmDate;

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
     * ntsConfirmNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSConfirmNum() {
        return ntsConfirmNum;
    }

    /**
     * ntsConfirmNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSConfirmNum(String value) {
        this.ntsConfirmNum = value;
    }

    /**
     * franchiseCorpNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFranchiseCorpNum() {
        return franchiseCorpNum;
    }

    /**
     * franchiseCorpNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFranchiseCorpNum(String value) {
        this.franchiseCorpNum = value;
    }

    /**
     * franchiseMemberID �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFranchiseMemberID() {
        return franchiseMemberID;
    }

    /**
     * franchiseMemberID �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFranchiseMemberID(String value) {
        this.franchiseMemberID = value;
    }

    /**
     * franchiseCorpName �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFranchiseCorpName() {
        return franchiseCorpName;
    }

    /**
     * franchiseCorpName �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFranchiseCorpName(String value) {
        this.franchiseCorpName = value;
    }

    /**
     * franchiseCEOName �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFranchiseCEOName() {
        return franchiseCEOName;
    }

    /**
     * franchiseCEOName �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFranchiseCEOName(String value) {
        this.franchiseCEOName = value;
    }

    /**
     * franchiseAddr �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFranchiseAddr() {
        return franchiseAddr;
    }

    /**
     * franchiseAddr �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFranchiseAddr(String value) {
        this.franchiseAddr = value;
    }

    /**
     * franchiseTel �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFranchiseTel() {
        return franchiseTel;
    }

    /**
     * franchiseTel �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFranchiseTel(String value) {
        this.franchiseTel = value;
    }

    /**
     * identityNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdentityNum() {
        return identityNum;
    }

    /**
     * identityNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdentityNum(String value) {
        this.identityNum = value;
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
     * hp �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHP() {
        return hp;
    }

    /**
     * hp �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHP(String value) {
        this.hp = value;
    }

    /**
     * fax �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFax() {
        return fax;
    }

    /**
     * fax �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFax(String value) {
        this.fax = value;
    }

    /**
     * email �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmail() {
        return email;
    }

    /**
     * email �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmail(String value) {
        this.email = value;
    }

    /**
     * tradeDate �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTradeDate() {
        return tradeDate;
    }

    /**
     * tradeDate �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTradeDate(String value) {
        this.tradeDate = value;
    }

    /**
     * tradeType �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTradeType() {
        return tradeType;
    }

    /**
     * tradeType �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTradeType(String value) {
        this.tradeType = value;
    }

    /**
     * tradeUsage �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTradeUsage() {
        return tradeUsage;
    }

    /**
     * tradeUsage �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTradeUsage(String value) {
        this.tradeUsage = value;
    }

    /**
     * tradeMethod �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTradeMethod() {
        return tradeMethod;
    }

    /**
     * tradeMethod �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTradeMethod(String value) {
        this.tradeMethod = value;
    }

    /**
     * amount �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmount() {
        return amount;
    }

    /**
     * amount �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmount(String value) {
        this.amount = value;
    }

    /**
     * tax �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTax() {
        return tax;
    }

    /**
     * tax �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTax(String value) {
        this.tax = value;
    }

    /**
     * serviceCharge �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceCharge() {
        return serviceCharge;
    }

    /**
     * serviceCharge �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceCharge(String value) {
        this.serviceCharge = value;
    }

    /**
     * cancelType �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCancelType() {
        return cancelType;
    }

    /**
     * cancelType �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCancelType(String value) {
        this.cancelType = value;
    }

    /**
     * cancelNTSConfirmNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCancelNTSConfirmNum() {
        return cancelNTSConfirmNum;
    }

    /**
     * cancelNTSConfirmNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCancelNTSConfirmNum(String value) {
        this.cancelNTSConfirmNum = value;
    }

    /**
     * cancelNTSConfirmDate �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCancelNTSConfirmDate() {
        return cancelNTSConfirmDate;
    }

    /**
     * cancelNTSConfirmDate �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCancelNTSConfirmDate(String value) {
        this.cancelNTSConfirmDate = value;
    }

}
