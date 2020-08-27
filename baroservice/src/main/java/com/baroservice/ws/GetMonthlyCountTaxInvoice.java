
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CERTKEY" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Year" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="Month" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="PeriodSearchType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="hasCanceled" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "certkey",
    "corpNum",
    "year",
    "month",
    "periodSearchType",
    "hasCanceled"
})
@XmlRootElement(name = "GetMonthlyCountTaxInvoice")
public class GetMonthlyCountTaxInvoice {

    @XmlElement(name = "CERTKEY")
    protected String certkey;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "Year")
    protected int year;
    @XmlElement(name = "Month")
    protected int month;
    @XmlElement(name = "PeriodSearchType")
    protected int periodSearchType;
    protected boolean hasCanceled;

    /**
     * certkey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCERTKEY() {
        return certkey;
    }

    /**
     * certkey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCERTKEY(String value) {
        this.certkey = value;
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
     * year 속성의 값을 가져옵니다.
     * 
     */
    public int getYear() {
        return year;
    }

    /**
     * year 속성의 값을 설정합니다.
     * 
     */
    public void setYear(int value) {
        this.year = value;
    }

    /**
     * month 속성의 값을 가져옵니다.
     * 
     */
    public int getMonth() {
        return month;
    }

    /**
     * month 속성의 값을 설정합니다.
     * 
     */
    public void setMonth(int value) {
        this.month = value;
    }

    /**
     * periodSearchType 속성의 값을 가져옵니다.
     * 
     */
    public int getPeriodSearchType() {
        return periodSearchType;
    }

    /**
     * periodSearchType 속성의 값을 설정합니다.
     * 
     */
    public void setPeriodSearchType(int value) {
        this.periodSearchType = value;
    }

    /**
     * hasCanceled 속성의 값을 가져옵니다.
     * 
     */
    public boolean isHasCanceled() {
        return hasCanceled;
    }

    /**
     * hasCanceled 속성의 값을 설정합니다.
     * 
     */
    public void setHasCanceled(boolean value) {
        this.hasCanceled = value;
    }

}
