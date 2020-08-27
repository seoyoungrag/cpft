
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>TaxInvoiceState complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType name="TaxInvoiceState"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="MgtKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark1" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark2" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BarobillState" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="InvoiceKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="IsOpened" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="NTSSendState" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="NTSSendKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSSendResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSSendDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSResultDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "TaxInvoiceState", propOrder = {
    "mgtKey",
    "remark1",
    "remark2",
    "barobillState",
    "invoiceKey",
    "isOpened",
    "ntsSendState",
    "ntsSendKey",
    "ntsSendResult",
    "ntsSendDT",
    "ntsResultDT"
})
public class TaxInvoiceState {

    @XmlElement(name = "MgtKey")
    protected String mgtKey;
    @XmlElement(name = "Remark1")
    protected String remark1;
    @XmlElement(name = "Remark2")
    protected String remark2;
    @XmlElement(name = "BarobillState")
    protected int barobillState;
    @XmlElement(name = "InvoiceKey")
    protected String invoiceKey;
    @XmlElement(name = "IsOpened")
    protected int isOpened;
    @XmlElement(name = "NTSSendState")
    protected int ntsSendState;
    @XmlElement(name = "NTSSendKey")
    protected String ntsSendKey;
    @XmlElement(name = "NTSSendResult")
    protected String ntsSendResult;
    @XmlElement(name = "NTSSendDT")
    protected String ntsSendDT;
    @XmlElement(name = "NTSResultDT")
    protected String ntsResultDT;

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
     * barobillState 속성의 값을 가져옵니다.
     * 
     */
    public int getBarobillState() {
        return barobillState;
    }

    /**
     * barobillState 속성의 값을 설정합니다.
     * 
     */
    public void setBarobillState(int value) {
        this.barobillState = value;
    }

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
     * isOpened 속성의 값을 가져옵니다.
     * 
     */
    public int getIsOpened() {
        return isOpened;
    }

    /**
     * isOpened 속성의 값을 설정합니다.
     * 
     */
    public void setIsOpened(int value) {
        this.isOpened = value;
    }

    /**
     * ntsSendState 속성의 값을 가져옵니다.
     * 
     */
    public int getNTSSendState() {
        return ntsSendState;
    }

    /**
     * ntsSendState 속성의 값을 설정합니다.
     * 
     */
    public void setNTSSendState(int value) {
        this.ntsSendState = value;
    }

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
     * ntsSendResult 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSSendResult() {
        return ntsSendResult;
    }

    /**
     * ntsSendResult 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSSendResult(String value) {
        this.ntsSendResult = value;
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
     * ntsResultDT 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSResultDT() {
        return ntsResultDT;
    }

    /**
     * ntsResultDT 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSResultDT(String value) {
        this.ntsResultDT = value;
    }

}
